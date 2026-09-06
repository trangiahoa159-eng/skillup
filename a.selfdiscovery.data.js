/* =========================================================
   Data for: Self-Discovery (a.selfdiscovery.html)
   Everything specific to THIS skill lives here. The engine
   (shared/engine.js) reads this object to build the page.
   ========================================================= */

window.SKILL_DATA = {
    badge: "Core Skill #01",
    title: "Self-Discovery",
    subtitle: "Discover yourself &amp; understand your hidden potential",
    backLink: { href: "01.html", text: "Back to Oneself" },

    definition: "Self-discovery is the ongoing process of understanding your own thoughts, emotions, values, strengths, and weaknesses. It's not about copying successful people or chasing what others expect of you — it's about building an honest, evolving picture of who you really are, so your choices, goals, and relationships can align with that truth.",

    pillars: [
        {
            title: "Self-Awareness",
            text: "Recognizing your emotions and reactions as they happen — for example, noticing that you tend to get defensive when criticized — instead of only realizing it in hindsight."
        },
        {
            title: "Honesty With Yourself",
            text: "Being willing to see both your strengths and your weaknesses clearly, without hiding from the uncomfortable parts or inflating the flattering ones."
        },
        {
            title: "Values &amp; Direction",
            text: "Knowing what genuinely matters to you — freedom, honesty, creativity, connection — and letting that guide your goals, rather than pursuing what looks good from the outside."
        },
        {
            title: "Growth Through Reflection",
            text: "Treating failures and feedback as information rather than identity. One bad presentation means you had a bad presentation — not that you are a failure."
        }
    ],

    actions: [
        {
            icon: "🎯",
            title: "IKIGAI Model (Life Purpose Intersection)",
            text: "Identify the intersection between: <em>What you love - What you excel at - What the world needs - What generates value</em>. Use this to choose the most suitable career path or project."
        },
        {
            icon: "🪟",
            title: "Johari Window",
            text: "Proactively seek feedback from peers and mentors to expand your \"Blind Spot\" (strengths or weaknesses that others see in you but you haven't realized yet)."
        },
        {
            icon: "🔍",
            title: "5-Whys Technique",
            text: "Whenever you feel confused or frustrated, ask yourself \"Why?\" 5 consecutive times to dig deep into the root cause of your internal state."
        },
        {
            icon: "⚡",
            title: "Energy Audit Journal",
            text: "Track your daily tasks to identify activities that boost your energy versus those that drain you, optimizing your routine for maximum output and well-being."
        }
    ],

    proTip: "Frameworks are reflective tools, not rigid rules. Combine multiple techniques to build a personalized roadmap that fits your personal journey.",

    questionsPerQuiz: 10, // sampled randomly from quizBank below

    quizBank: [
        {
            question: "What is self-discovery?",
            options: [
                { text: "Finding a career that suits you", explanation: "Career choice is only one part of self-discovery." },
                { text: "Understanding your thoughts, emotions, values, strengths, and weaknesses", explanation: "Self-discovery is the process of gaining a deeper understanding of who you are." },
                { text: "Learning how to become like successful people", explanation: "Self-discovery is about understanding yourself, not copying others." },
                { text: "Finding ways to make other people understand you", explanation: "Understanding how others see you can help, but you need to understand yourself first." }
            ],
            correctIndex: 1
        },
        {
            question: "What is the most important factor when beginning your self-discovery journey?",
            options: [
                { text: "Knowing what other people think about you", explanation: "Other people's opinions can be useful, but they do not completely define you." },
                { text: "Comparing yourself with your friends", explanation: "Comparing yourself with others can make it harder to see yourself objectively." },
                { text: "Being honest with yourself", explanation: "Honesty helps you recognize both your strengths and areas for improvement." },
                { text: "Hiding your weaknesses", explanation: "Hiding weaknesses makes personal growth more difficult." }
            ],
            correctIndex: 2
        },
        {
            question: "What are \"personal values\"?",
            options: [
                { text: "Things society believes a person should have", explanation: "Society can influence your values, but it does not completely determine them." },
                { text: "Principles and things that a person considers important in life", explanation: "Examples include honesty, freedom, family, responsibility, and creativity." },
                { text: "Achievements a person has accomplished", explanation: "Achievements are results, not necessarily personal values." },
                { text: "Personality traits that other people like", explanation: "Other people's preferences do not define your values." }
            ],
            correctIndex: 1
        },
        {
            question: "When are you most likely to feel that you are truly being yourself?",
            options: [
                { text: "When many people compliment you", explanation: "Compliments can motivate you, but they should not determine your identity." },
                { text: "When you do things that match your values and interests", explanation: "People often feel most authentic when their actions align with their values." },
                { text: "When you do what all your friends are doing", explanation: "Following the majority does not necessarily mean being yourself." },
                { text: "When nobody can see you", explanation: "Being alone can help you reflect, but it is not a requirement for authenticity." }
            ],
            correctIndex: 1
        },
        {
            question: "Which of the following is the clearest example of self-awareness?",
            options: [
                { text: "Knowing what your friends like", explanation: "This is more about understanding others." },
                { text: "Realizing that you often become angry when criticized", explanation: "You are recognizing your own emotions and reactions." },
                { text: "Knowing what other people are doing", explanation: "This does not directly demonstrate self-awareness." },
                { text: "Knowing how to make other people happy", explanation: "This is more related to social skills and empathy." }
            ],
            correctIndex: 1
        },
        {
            question: "What is one of the best ways to identify your strengths?",
            options: [
                { text: "Relying only on compliments from others", explanation: "Other people's feedback is useful, but it is not enough." },
                { text: "Looking at things you consistently do well and enjoy doing", explanation: "Strengths often appear where ability, experience, and interest overlap." },
                { text: "Choosing skills that are currently popular", explanation: "Popularity does not determine your personal strengths." },
                { text: "Choosing the most difficult skills", explanation: "Difficulty does not necessarily mean something suits you." }
            ],
            correctIndex: 1
        },
        {
            question: "If you realize that you are not good at public speaking, what is the most appropriate response?",
            options: [
                { text: "Decide that you have no talent for it", explanation: "A current weakness does not mean a permanent limitation." },
                { text: "Avoid every situation that requires public speaking", explanation: "Avoidance reduces opportunities to improve." },
                { text: "Identify the reasons and gradually practice", explanation: "Self-discovery includes recognizing weaknesses and finding ways to develop them." },
                { text: "Pretend that you are already good at it", explanation: "Hiding a weakness does not improve your ability." }
            ],
            correctIndex: 2
        },
        {
            question: "Which weakness could potentially become a strength if developed properly?",
            options: [
                { text: "Overthinking", explanation: "Overthinking can potentially become strong analytical thinking when properly managed." },
                { text: "Never listening to others", explanation: "Poor listening is difficult to turn into a strength without changing your attitude." },
                { text: "Always blaming other people", explanation: "Blaming others does not create a strong foundation for growth." },
                { text: "Refusing to learn", explanation: "Refusing to learn limits personal development." }
            ],
            correctIndex: 0
        },
        {
            question: "Someone says, \"I failed my presentation, so I am a terrible person.\" What is the main problem with this thinking?",
            options: [
                { text: "They are judging themselves based on a single experience", explanation: "One failure does not represent your entire identity." },
                { text: "They are too confident", explanation: "This is actually closer to negative self-evaluation than overconfidence." },
                { text: "They do not care about failure", explanation: "They are focusing too strongly on the failure." },
                { text: "They are judging other people", explanation: "They are judging themselves, not others." }
            ],
            correctIndex: 0
        },
        {
            question: "What can help you understand your weaknesses better?",
            options: [
                { text: "Avoiding them", explanation: "Avoidance does not create awareness." },
                { text: "Listening only to compliments", explanation: "Only listening to praise gives you a one-sided perspective." },
                { text: "Asking for feedback and observing your own behavior", explanation: "Feedback and self-observation can reveal personal blind spots." },
                { text: "Comparing yourself with the most successful person", explanation: "Comparing yourself with others can create pressure rather than understanding." }
            ],
            correctIndex: 2
        },
        {
            question: "Your best friend tells you that you behaved badly. What should you do first?",
            options: [
                { text: "Immediately argue back", explanation: "Reacting immediately while upset can make the conflict worse." },
                { text: "Stay silent and cut off contact", explanation: "Cutting off contact does not help you understand the problem." },
                { text: "Calmly listen and consider their feedback", explanation: "Listening allows you to determine whether the feedback is useful." },
                { text: "Blame the situation", explanation: "Circumstances may influence behavior, but they do not remove personal responsibility." }
            ],
            correctIndex: 2
        },
        {
            question: "When you feel angry, which action demonstrates good self-awareness?",
            options: [
                { text: "Immediately say everything you are thinking", explanation: "Strong emotions can make it harder to control what you say." },
                { text: "Recognize that you are angry and give yourself time to calm down", explanation: "Recognizing an emotion before acting on it is an important part of emotional intelligence." },
                { text: "Pretend that you are not angry", explanation: "Ignoring or suppressing emotions is not the same as processing them." },
                { text: "Find someone else to take your anger out on", explanation: "Taking your anger out on someone else only creates another problem." }
            ],
            correctIndex: 1
        },
        {
            question: "After failing at something, which response is most helpful for personal growth?",
            options: [
                { text: "\"I am completely useless.\"", explanation: "This turns one failure into a judgment about your entire identity." },
                { text: "\"It doesn't matter. I don't need to care.\"", explanation: "Completely ignoring the experience means missing an opportunity to learn." },
                { text: "\"What went wrong, and what could I do differently next time?\"", explanation: "This reflects self-reflection and a growth mindset." },
                { text: "\"Everything is someone else's fault.\"", explanation: "Blaming others reduces your ability to recognize your own responsibility." }
            ],
            correctIndex: 2
        },
        {
            question: "What is the difference between \"self-acceptance\" and \"being satisfied with yourself\"?",
            options: [
                { text: "They are exactly the same", explanation: "The two concepts are related but not identical." },
                { text: "Self-acceptance means you never need to change", explanation: "Accepting yourself does not mean stopping personal growth." },
                { text: "Self-acceptance means acknowledging who you are while still allowing yourself to grow", explanation: "You can accept yourself as you are while still working toward improvement." },
                { text: "Being satisfied with yourself is always better", explanation: "Excessive satisfaction can sometimes reduce motivation to improve." }
            ],
            correctIndex: 2
        },
        {
            question: "What best distinguishes an interest from a passion?",
            options: [
                { text: "Passion must always make money", explanation: "A passion does not necessarily need to generate income." },
                { text: "Passion often motivates you to invest time and effort over a long period", explanation: "Long-term commitment and willingness to invest effort can indicate passion." },
                { text: "Interests always last a lifetime", explanation: "Interests can change over time." },
                { text: "Passion must be a natural talent", explanation: "Passion and natural talent are not the same thing." }
            ],
            correctIndex: 1
        },
        {
            question: "You do not know what career you want in the future. What is the best approach?",
            options: [
                { text: "Choose the highest-paying career", explanation: "Income can be important, but it is not the only factor." },
                { text: "Choose the career your parents want", explanation: "Other people's advice can help, but they cannot live your life for you." },
                { text: "Try different activities and observe what you enjoy, what you are good at, and what matters to you", explanation: "Real experiences are one of the best ways to discover yourself." },
                { text: "Wait until the answer naturally appears", explanation: "Passive waiting may unnecessarily delay the process." }
            ],
            correctIndex: 2
        },
        {
            question: "What should a good personal goal be like?",
            options: [
                { text: "The bigger, the better", explanation: "An overly ambitious but unrealistic goal can lead to frustration." },
                { text: "Based entirely on other people's expectations", explanation: "Goals based entirely on external expectations can be difficult to maintain." },
                { text: "Aligned with your values and realistic abilities", explanation: "A meaningful goal should matter to the person setting it." },
                { text: "Without a deadline", explanation: "A deadline makes a goal more specific and easier to track." }
            ],
            correctIndex: 2
        },
        {
            question: "If a personal goal no longer feels right for you, what should you do?",
            options: [
                { text: "Keep pursuing it simply because you already started", explanation: "Persistence is valuable, but persistence should not become stubbornness." },
                { text: "Give up on all your goals", explanation: "One unsuitable goal does not make all goals meaningless." },
                { text: "Re-evaluate the reasons behind it and adjust the goal if necessary", explanation: "Self-discovery also means updating your goals as you learn more about yourself." },
                { text: "Consider changing the goal a failure", explanation: "Changing direction does not necessarily mean failure." }
            ],
            correctIndex: 2
        },
        {
            question: "You realize that you often procrastinate on difficult tasks. What should you do first?",
            options: [
                { text: "Blame yourself", explanation: "Self-blame does not identify the underlying cause." },
                { text: "Find out why you procrastinate", explanation: "The reason could be fear of failure, feeling overwhelmed, lack of motivation, or something else." },
                { text: "Force yourself to work for five hours immediately", explanation: "Forcing yourself may not solve the underlying problem." },
                { text: "Give up on the task", explanation: "Giving up removes the task but does not solve the habit." }
            ],
            correctIndex: 1
        },
        {
            question: "You receive two opposite opinions: one person says you are very confident, while another says you are arrogant. What should you do?",
            options: [
                { text: "Believe the person who praised you", explanation: "Only accepting praise creates a one-sided perspective." },
                { text: "Believe the person who criticized you", explanation: "Only accepting criticism is equally unbalanced." },
                { text: "Examine the specific behaviors that led to both opinions", explanation: "Looking at specific behaviors and situations gives you a more objective perspective." },
                { text: "Trust neither person", explanation: "Feedback can still be valuable when analyzed carefully." }
            ],
            correctIndex: 2
        },
        {
            question: "What is an effective way to track your personal growth?",
            options: [
                { text: "Look only at achievements", explanation: "Achievements represent only one part of personal growth." },
                { text: "Record your thoughts, emotions, behaviors, and lessons learned", explanation: "Journaling and self-reflection can help you notice changes over time." },
                { text: "Compare yourself with others every day", explanation: "Comparison does not accurately represent your personal journey." },
                { text: "Wait for other people to evaluate you", explanation: "External feedback is useful, but it should not be your only source of self-understanding." }
            ],
            correctIndex: 1
        },
        {
            question: "You discover that one of your core values is \"freedom,\" but your current job gives you very little freedom. What should you consider?",
            options: [
                { text: "Quit immediately", explanation: "It may be too early to make a major decision without understanding the situation." },
                { text: "Ignore your personal values", explanation: "Ignoring an important personal value may lead to long-term dissatisfaction." },
                { text: "Evaluate the conflict and consider ways to make adjustments", explanation: "First evaluate how significant the conflict is and what realistic changes are possible." },
                { text: "Force yourself to change your values", explanation: "Personal values can evolve, but they should not be changed simply because of pressure." }
            ],
            correctIndex: 2
        },
        {
            question: "Your friend says, \"I don't know what I'm good at.\" What would be the best advice?",
            options: [
                { text: "\"Try new things and observe what you enjoy and what you do well.\"", explanation: "Experimentation and reflection can help reveal strengths." },
                { text: "\"If you don't know, just randomly choose something.\"", explanation: "Random choices do not necessarily help you understand yourself." },
                { text: "\"Look at other people and find what you have in common with them.\"", explanation: "Other people can provide inspiration, but they should not become your template." },
                { text: "\"Wait until someone tells you what you are good at.\"", explanation: "Depending entirely on external opinions limits self-awareness." }
            ],
            correctIndex: 0
        },
        {
            question: "After completing a Self-Discovery Quiz, what is the most valuable thing to do?",
            options: [
                { text: "Find out your score", explanation: "A score is only one indicator and cannot represent your entire personality." },
                { text: "Compare your results with your friends", explanation: "Everyone has different experiences and personalities, so comparison is not necessarily useful." },
                { text: "Reflect on what your answers helped you discover about yourself", explanation: "The main purpose of self-discovery is gaining insight into yourself." },
                { text: "Retake the quiz immediately to get a higher score", explanation: "Improving your score is less important than understanding why you chose your answers." }
            ],
            correctIndex: 2
        }
    ]
};
