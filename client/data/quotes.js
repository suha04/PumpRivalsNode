const quotes = [
    {
        id: 1,
        quote: "Push yourself because no one else is going to do it for you."
    },
    {
        id: 2,
        quote: "Sweat is just fat crying."
    },
    {
        id: 3,
        quote: "Strive for progress, not perfection."
    },
    {
        id: 4,
        quote: "Your body can stand almost anything. It's your mind you have to convince."
    },
    {
        id: 5,
        quote: "Don't limit your challenges, challenge your limits."
    },
    {
        id: 6,
        quote: "When you feel like quitting, think about why you started."
    },
    {
        id: 7,
        quote: "Train insane or remain the same."
    },
    {
        id: 8,
        quote: "It's not about being the best. It's about being better than you were yesterday."
    },
    {
        id: 9,
        quote: "Strong is the new sexy."
    },
    {
        id: 10,
        quote: "Fitness is not about being better than someone else. It's about being better than you used to be."
    },
    {
        id: 11,
        quote: "Excuses don't burn calories."
    },
    {
        id: 12,
        quote: "Pain is temporary, pride is forever."
    },
    {
        id: 13,
        quote: "The hardest lift of all is lifting your butt off the couch."
    },
    {
        id: 14,
        quote: "You don't have to be extreme, just consistent."
    },
    {
        id: 15,
        quote: "A one-hour workout is 4% of your day. No excuses."
    },
    {
        id: 16,
        quote: "Fall in love with taking care of your body."
    },
    {
        id: 17,
        quote: "Success starts with self-discipline."
    },
    {
        id: 18,
        quote: "Don't wish for a good body, work for it."
    },
    {
        id: 19,
        quote: "No pain, no gain."
    },
    {
        id: 20,
        quote: "The difference between a dream and reality is action."
    },
    {
        id: 21,
        quote: "Sore today, strong tomorrow."
    },
    {
        id: 22,
        quote: "Great things never came from comfort zones."
    },
    {
        id: 23,
        quote: "Fitness is a journey, not a destination."
    },
    {
        id: 24,
        quote: "You are stronger than you think."
    },
    {
        id: 25,
        quote: "Your health is an investment, not an expense."
    },
    {
        id: 26,
        quote: "Wake up. Work out. Repeat."
    },
    {
        id: 27,
        quote: "Discipline beats motivation every time."
    },
    {
        id: 28,
        quote: "You don't find willpower, you create it."
    },
    {
        id: 29,
        quote: "You don't get what you wish for, you get what you work for."
    },
    {
        id: 30,
        quote: "Consistency is the key to progress."
    },
    {
        id: 31,
        quote: "Sweat, smile, repeat."
    },
    {
        id: 32,
        quote: "A little progress each day adds up to big results."
    },
    {
        id: 33,
        quote: "Stronger than yesterday."
    },
    {
        id: 34,
        quote: "The pain you feel today will be the strength you feel tomorrow."
    },
    {
        id: 35,
        quote: "Success doesn't come from what you do occasionally, it comes from what you do consistently."
    },
    {
        id: 36,
        quote: "Don't stop when you're tired. Stop when you're done."
    },
    {
        id: 37,
        quote: "Make your body your machine, not a slave."
    },
    {
        id: 38,
        quote: "What seems impossible today will one day become your warm-up."
    },
    {
        id: 39,
        quote: "Results happen over time, not overnight. Work hard and be patient."
    },
    {
        id: 40,
        quote: "Good things come to those who sweat."
    },
    {
        id: 41,
        quote: "The only bad workout is the one that didn't happen."
    },
    {
        id: 42,
        quote: "Dream big, work hard, and stay focused."
    },
    {
        id: 43,
        quote: "It's not just about losing weight; it's about gaining life."
    },
    {
        id: 44,
        quote: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't."
    },
    {
        id: 45,
        quote: "Fit is not a destination, it's a way of life."
    },
    {
        id: 46,
        quote: "Train like a beast, look like a beauty."
    },
    {
        id: 47,
        quote: "Motivation gets you started. Habit keeps you going."
    },
    {
        id: 48,
        quote: "The gym is my therapy."
    },
    {
        id: 49,
        quote: "Fitness is like marriage: You can't cheat on it and expect it to work."
    },
    {
        id: 50,
        quote: "Stop waiting for things to happen. Go out and make them happen."
    },
    {
        id: 51,
        quote: "There is no shortcut. It takes time to build a stronger, better you."
    },
    {
        id: 52,
        quote: "It's never too early or too late to work towards being the healthiest you."
    },
    {
        id: 53,
        quote: "Sweat now, shine later."
    },
    {
        id: 54,
        quote: "The more you sweat in training, the less you bleed in battle."
    },
    {
        id: 55,
        quote: "Your only limit is you."
    },
    {
        id: 56,
        quote: "Start where you are. Use what you have. Do what you can."
    },
    {
        id: 57,
        quote: "Fitness is not about being perfect, it's about effort."
    },
    {
        id: 58,
        quote: "Train your mind, and your body will follow."
    },
    {
        id: 59,
        quote: "Your vibe attracts your tribe. Stay positive."
    },
    {
        id: 60,
        quote: "Don't stop until you're proud."
    },
    {
        id: 61,
        quote: "It's you vs. you."
    },
    {
        id: 62,
        quote: "Fitness is the foundation for everything else in your life."
    },
    {
        id: 63,
        quote: "Every workout is progress, no matter how small."
    },
    {
        id: 64,
        quote: "Success is earned, not given."
    },
    {
        id: 65,
        quote: "One step at a time."
    },
    {
        id: 66,
        quote: "Make sweat your best accessory."
    },
    {
        id: 67,
        quote: "Don't wait for the perfect moment. Take the moment and make it perfect."
    },
    {
        id: 68,
        quote: "Fitness is freedom."
    },
    {
        id: 69,
        quote: "Be the energy you want to attract."
    },
    {
        id: 70,
        quote: "The secret of getting ahead is getting started."
    },
    {
        id: 71,
        quote: "Every champion was once a beginner."
    },
    {
        id: 72,
        quote: "Hard work beats talent when talent doesn't work hard."
    },
    {
        id: 73,
        quote: "Be stronger than your excuses."
    },
    {
        id: 74,
        quote: "Excuses are the nails used to build a house of failure."
    },
    {
        id: 75,
        quote: "Your body hears everything your mind says. Stay positive."
    },
    {
        id: 76,
        quote: "Nothing worth having comes easy."
    },
    {
        id: 77,
        quote: "Don't let one bad day stop you from reaching your goal."
    },
    {
        id: 78,
        quote: "If you stumble, make it part of the dance."
    },
    {
        id: 79,
        quote: "Take care of your body. It's the only place you have to live."
    },
    {
        id: 80,
        quote: "A strong body equals a strong mind."
    },
    {
        id: 81,
        quote: "Your future self will thank you for the effort you put in today."
    },
    {
        id: 82,
        quote: "Winners train. Losers complain."
    },
    {
        id: 83,
        quote: "One rep at a time."
    },
    {
        id: 84,
        quote: "Pain is weakness leaving the body."
    },
    {
        id: 85,
        quote: "Today is another chance to get it right."
    },
    {
        id: 86,
        quote: "Dedication, determination, and discipline."
    },
    {
        id: 87,
        quote: "Focus on progress, not perfection."
    },
    {
        id: 88,
        quote: "Feel the burn, embrace the results."
    },
    {
        id: 89,
        quote: "You didn't come this far to only come this far."
    },
    {
        id: 90,
        quote: "Success isn't given. It's earned."
    },
    {
        id: 91,
        quote: "Commit to be fit."
    },
    {
        id: 92,
        quote: "It's not about having time; it's about making time."
    },
    {
        id: 93,
        quote: "Earn your shower."
    },
    {
        id: 94,
        quote: "The greatest wealth is health."
    },
    {
        id: 95,
        quote: "Sweat is the perfume of achievement."
    },
    {
        id: 96,
        quote: "If it doesn't challenge you, it won't change you."
    },
    {
        id: 97,
        quote: "Crush your goals, not your dreams."
    },
    {
        id: 98,
        quote: "When you feel like quitting, remember why you started."
    },
    {
        id: 99,
        quote: "Keep going. Your future self is watching."
    },
    {
        id: 100,
        quote: "Make every workout count."
    }
]

module.exports = quotes;