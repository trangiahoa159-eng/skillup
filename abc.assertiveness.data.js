/* =========================================================
   Data for: Assertiveness (abc.assertiveness.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #23",
    title: "Assertiveness",
    subtitle: "State your needs and boundaries clearly and respectfully",
    backLink: { href: "03.html", text: "Back to Social" },

    definition: "Assertiveness is the ability to express your needs, opinions, and boundaries clearly and directly, while still respecting the other person's perspective and rights. It sits between passivity, where your own needs go unspoken, and aggression, where other people's needs or feelings are disregarded — assertiveness holds both your interests and the other person's in view at once.",

    pillars: [
        {
            title: "Assertive, Not Aggressive",
            text: "Assertiveness states your position firmly without attacking, blaming, or dismissing the other person; aggression prioritizes winning over mutual respect."
        },
        {
            title: "Assertive, Not Passive",
            text: "Passivity avoids conflict by staying silent about your own needs, which often leads to resentment building up over time."
        },
        {
            title: "Clear, Specific Language",
            text: "Vague hints rarely produce the outcome you want. Directly naming what you need or don't want removes ambiguity for the other person."
        },
        {
            title: "Ownership of Your Perspective",
            text: "Framing statements around your own experience ('I feel... when... because...') keeps the focus on communication rather than blame."
        }
    ],

    actions: [
        {
            icon: "🗣️",
            title: "'I' Statements",
            text: "Frame concerns as 'I feel X when Y happens, because Z' instead of 'You always do X,' which reduces defensiveness and keeps the focus on the issue."
        },
        {
            icon: "🚫",
            title: "The Direct No",
            text: "Practice declining requests with a short, clear 'no' or 'that doesn't work for me,' resisting the urge to over-explain or apologize excessively."
        },
        {
            icon: "🔁",
            title: "Broken Record Technique",
            text: "When someone pushes back on a reasonable boundary, calmly repeat your position without escalating or over-justifying, until it's respected."
        },
        {
            icon: "⏱️",
            title: "Delay the Response",
            text: "If a request catches you off guard, say 'let me think about it and get back to you' instead of agreeing automatically out of discomfort."
        }
    ],

    proTip: "Assertiveness often feels uncomfortable at first precisely because it's new — that discomfort is a sign you're changing an old pattern, not a sign you're doing it wrong.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What is assertiveness?",
            options: [
                { text: "Getting your way regardless of others' feelings", explanation: "That describes aggression, not assertiveness." },
                { text: "Expressing your needs and boundaries clearly while respecting the other person's perspective", explanation: "Assertiveness holds both your own needs and the other person's rights in view at once." },
                { text: "Staying quiet to avoid any conflict", explanation: "That describes passivity, the opposite pattern from assertiveness." },
                { text: "Only relevant in workplace disagreements", explanation: "Assertiveness applies to personal relationships just as much as workplace ones." }
            ],
            correctIndex: 1
        },
        {
            question: "How does assertiveness differ from aggression?",
            options: [
                { text: "They are the same thing, just different words", explanation: "Assertiveness respects the other person; aggression disregards their needs or feelings." },
                { text: "Assertiveness states your position firmly without attacking or dismissing the other person", explanation: "Aggression prioritizes winning over mutual respect, while assertiveness holds both in view." },
                { text: "Aggression is simply a stronger form of assertiveness", explanation: "They're qualitatively different approaches, not different degrees of the same thing." },
                { text: "Assertiveness always avoids stating your true position", explanation: "Assertiveness is specifically about stating your true position, just respectfully." }
            ],
            correctIndex: 1
        },
        {
            question: "What tends to happen when someone consistently behaves passively instead of assertively?",
            options: [
                { text: "Their needs are always automatically met anyway", explanation: "Passivity typically means needs go unspoken and often unmet." },
                { text: "Resentment often builds up over time from unspoken needs", explanation: "Staying silent about needs repeatedly can lead to growing frustration or resentment." },
                { text: "Passivity has no real long-term effect on relationships", explanation: "Long-term passivity can affect relationship satisfaction and personal wellbeing." },
                { text: "Passivity is the most respectful communication style", explanation: "Assertiveness, not passivity, is generally considered the most respectful and functional style." }
            ],
            correctIndex: 1
        },
        {
            question: "Why are 'I' statements ('I feel X when Y happens') often more effective than 'You always...' statements?",
            options: [
                { text: "They accomplish exactly the same thing as 'you' statements", explanation: "'I' statements tend to reduce defensiveness compared to accusatory 'you' statements." },
                { text: "They reduce defensiveness by focusing on your own experience rather than blame", explanation: "Framing around your own feelings keeps the conversation focused on the issue, not an attack." },
                { text: "'I' statements are only appropriate in therapy settings", explanation: "They're broadly useful in everyday personal and professional conversations." },
                { text: "They remove the need to state your actual need clearly", explanation: "You still need to clearly state your need — 'I' statements just frame it more effectively." }
            ],
            correctIndex: 1
        },
        {
            question: "What is the 'broken record technique' used for?",
            options: [
                { text: "Repeating yourself to annoy the other person into giving up", explanation: "The technique is about calm, respectful persistence, not annoyance tactics." },
                { text: "Calmly repeating your position without escalating when someone pushes back on a reasonable boundary", explanation: "This maintains your boundary without needing to over-justify or argue repeatedly." },
                { text: "Changing your position every time someone pushes back", explanation: "The technique is specifically about maintaining your position, not changing it under pressure." },
                { text: "Only useful in formal negotiations", explanation: "It's useful in everyday personal boundary-setting too." }
            ],
            correctIndex: 1
        },
        {
            question: "Why might delaying a response ('let me think about it') be a useful assertiveness tool?",
            options: [
                { text: "It avoids ever having to respond to the request", explanation: "A delayed response is still a response — it just gives you time to decide thoughtfully." },
                { text: "It prevents agreeing automatically out of discomfort when caught off guard", explanation: "This creates space to consider the request rather than reflexively saying yes." },
                { text: "Delaying always means you're being passive", explanation: "Delaying is different from passivity — it's a deliberate pause, not avoidance of the issue." },
                { text: "It's rude to ever delay a response to a request", explanation: "A brief, honest delay is a reasonable and often respectful way to handle unexpected requests." }
            ],
            correctIndex: 1
        },
        {
            question: "A friend keeps pushing back after you've calmly declined a request twice. What does assertiveness suggest?",
            options: [
                { text: "Give in to avoid further conflict", explanation: "Giving in after a clear, reasonable decline can reinforce a pattern of not respecting your boundaries." },
                { text: "Calmly restate your position without escalating or over-explaining", explanation: "Consistent, calm restatement (the broken record technique) maintains the boundary respectfully." },
                { text: "Respond with anger to make your point clearly", explanation: "Escalating to anger shifts from assertive to aggressive communication." },
                { text: "Avoid the friend entirely from now on", explanation: "Avoidance isn't necessary if a calm, direct restatement of your boundary is possible." }
            ],
            correctIndex: 1
        },
        {
            question: "Why is over-explaining or excessively apologizing when declining a request often counterproductive?",
            options: [
                { text: "It always makes your position clearer", explanation: "Over-explaining can actually invite negotiation or make the decline seem less firm." },
                { text: "It can invite negotiation or make your 'no' seem less firm than intended", explanation: "A short, clear decline is often more effective and respectful than a long justification." },
                { text: "Explanations are always required when declining a request", explanation: "A brief explanation can be helpful, but excessive justification isn't necessary." },
                { text: "This has no effect on how the request is received", explanation: "How a decline is framed does affect how firmly it's received." }
            ],
            correctIndex: 1
        },
        {
            question: "What does it mean that assertiveness 'holds both your interests and the other person's in view at once'?",
            options: [
                { text: "You must always prioritize the other person's needs over your own", explanation: "Assertiveness gives your own needs equal standing, not less standing, than the other person's." },
                { text: "It balances expressing your own needs with respecting the other person's perspective and rights", explanation: "This is the core distinction from both passivity (ignoring your needs) and aggression (ignoring theirs)." },
                { text: "You must always prioritize your own needs over the other person's", explanation: "Assertiveness isn't about disregarding the other person's needs, only about not silencing your own." },
                { text: "It means avoiding conflict entirely by never stating your needs", explanation: "Avoiding conflict at the cost of never stating your needs describes passivity, not assertiveness." }
            ],
            correctIndex: 1
        },
        {
            question: "Why might assertiveness feel uncomfortable when you first start practicing it?",
            options: [
                { text: "Because it's inherently a harmful behavior", explanation: "Assertiveness is a healthy communication style; discomfort usually reflects unfamiliarity, not harm." },
                { text: "Because it represents a change from an old pattern, like passivity or avoidance", explanation: "New behaviors, even healthy ones, often feel uncomfortable at first simply because they're unfamiliar." },
                { text: "Because it always leads to conflict with others", explanation: "Assertiveness, done well, often reduces long-term conflict by addressing issues directly and respectfully." },
                { text: "Discomfort means you should stop practicing it immediately", explanation: "Initial discomfort is common and doesn't indicate the practice is wrong." }
            ],
            correctIndex: 1
        }
    ]
};
