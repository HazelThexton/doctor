// data for puabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var puaInitials = [
  "It's beautiful out today... Too bad we're stuck inside.",
  "Have you seen the latest Marvel movie? I wonder if it's any good.",
  "I've gotta get back to my friends soon, but wow, your top looks great."
];

var puaFinals = [
  "See you later babe.",
  "Let me get your number before you go!",
  "Yeah, I have to go anyway, my friends are waiting."
];

var puaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
];

var puaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike",
  "i have"
];

var puaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are",
  "i have", "you have"
];

var puaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need", "crave"],
  "everyone": ["everybody", "nobody", "noone"],
  "boyfriend": ["girlfriend","partner"],
  "happy": ["elated", "glad", "better", "good", "well"],
  "sad": ["unhappy", "depressed", "sick", "hurting"],
  "insecure": ["fat","ugly","unattractive","unloved","unlikeable"],
  "thanks": ["thank you", "thx"],
  "angry": ["mad","upset","annoyed","irritated"],
  "job": ["work", "employment", "career"]
};

var puaKeywords = [

  /*
  Array of
  ["<key>", <rank>, [
  ["<decomp>", [
  "<reasmb>",
  "<reasmb>",
  "<reasmb>"
]],
["<decomp>", [
"<reasmb>",
"<reasmb>",
"<reasmb>"
]]
]]
*/

["xnone", 0, [
  ["*", [
    "Of course, a nice girl like you shouldn't be talking to a guy like me.",
    "I'm not sure if you're cool enough for us to hang out...",
    "Mm-hm.",
    "You would make a good assistant, don't you think?",
    "Uh, whatever.",
    "Respect.",
    "*wink*"
  ]]
]],
["sorry", 0, [
  ["*", [
    "Apologizing makes you sound insecure, you know."
  ]]
]],
["apologise", 0, [
  ["*", [
    "goto sorry"
  ]]
]],
["forget", 5, [
  ["* i forget *", [
    "Can you think of why you might forget (2) ?",
    "Why can't you remember (2) ?",
    "How often do you think of (2) ?",
    "Does it bother you to forget that ?",
    "Could it be a mental block ?",
    "Are you generally forgetful ?",
    "Do you think you are suppressing (2) ?"
  ]],
  ["* did you forget *", [
    "Yeah, I'm kind of distracted. Your friend is very attractive",
    "Are you sure you told me?",
    "Wow, insecure much?",
    "goto what",
  ]]
]],
["if", 3, [
  ["* if *", [
    "Do you think it's likely that (2) ?",
    "Do you wish that (2) ?",
    "What do you know about (2) ?",
    "Really, if (2) ?",
    "What would you do if (2) ?",
    "But what are the chances that (2) ?",
    "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
  ["* i dreamed *", [
    "Really, (2)? That's pretty weird.",
    "Have you ever fantasized (2)?",
    "goto dream"
  ]]
]],
["dream", 3, [
  ["*", [
    "Are you a dreamer?",
    "My dream is to design the smartphone of the future.",
    "Letting dreams stay dreams is the loser's way."
  ]]
]],
["perhaps", 0, [
  ["*", [
    "You would be more sexy if you seemed less insecure",
    "Can't you be more positive ?",
    "You aren't sure?",
    "Don't you know?"
  ]]
]],
["name", 15, [
  ["*", [
    "My name's Brad. I reimagine the image of Fortune 500 companies.",
    "My name's Alex.",
    "I'm Joe.",
    "I'm Jackson."
  ]]
]],
["deutsch", 0, [
  ["*", [
    "goto xforeign",
    "No comprende."
  ]]
]],
["francais", 0, [
  ["*", [
    "goto xforeign",
    "No comprende."
  ]]
]],
["italiano", 0, [
  ["*", [
    "goto xforeign",
    "No comprende."
  ]]
]],
["espanol", 0, [
  ["*", [
    "goto xforeign",
    "No comprende."
  ]]
]],
["xforeign", 0, [
  ["*", [
    "I just speak English."
  ]]
]],
["hello", 0, [
  ["*", [
    "Hey.",
    "Hi."
  ]]
]],
["am", 0, [
  ["* am i *", [
    "Do you really think you're (2)?",
    "You wish you were (2).",
    "Do you wish I'd tell you you're (2)?",
    "goto what"
  ]],
  ["* i am *", [
    "goto i"
  ]],
  ["*", [
    "Why do you say 'am' ?",
    "Huh?"
  ]]
]],
["are", 0, [
  ["* are you *", [
    "Why are you interested in whether I'm (2) or not ?",
    "Someone's curious!",
    "Perhaps I am (2) in your fantasies.",
    "Do you think I'm (2)?",
    "goto what",
    "Would it matter to you?",
    "What if I were (2)?"
  ]],
  ["* you are *", [
    "goto you"
  ]],
  ["* are *", [
    "Girls usually say that.",
    "Would you like it if they weren't (2)?",
    "What if they weren't (2)?",
    "Are they always (2)?",
    "Possibly they are (2)."
  ]]
]],
["your", 0, [
  ["* your @job *", [
    "I'm designing the smartphone of the future.",
    "I'm actually a stage magician.",
    "I reimagine the image of Fortune 500 companies."
  ]],
  ["* your *", [
    "Isn't my (2) amazing?",
    "Shouldn't you worry about your own (2)?",
    "Really, my (2) ?",
    "My (2)?",
    "Do you want my (2)?"
  ]],
]],
["was", 2, [
  ["* was i *", [
    "What if you were (2) ?",
    "Do you think you were (2)?",
    "Were you (2)?",
    "goto what"
  ]],
  ["* i was *", [
    "Were you really ?",
    "Why do you tell me you were (2)?",
    "Perhaps I already know you were (2)."
  ]],
  ["* was you *", [
    "Would you like to believe I was (2) ?",
    "What suggests that I was (2) ?",
    "What do you think ?",
    "Perhaps I was (2).",
    "What if I had been (2)?"
  ]]
]],
["i", 0, [
  ["* i @desire *", [
    "What would it mean to you if you got (3) ?",
    "Why do you want (3) ?",
    "Suppose you got (3) soon.",
    "Maybe you should think about what other people want.",
    "What would getting (3) mean to you ?",
    "What does wanting (3) have to do with this discussion ?"
  ]],
  ["* i am* @sad *", [
    "I am sorry to hear that you are (3).",
    "Did you fight with your boyfriend? Is that why you are (3) ?",
    "Well, if you feel (3) it might just be hormones. ",
    "You're (3) ? Maybe you just need to smile!"
  ]],
  ["* i am* @insecure *", [
    "Maybe if you lost some weight you wouldn't feel so (3).",
    "Nothing a little exercise can't fix!",
    "Well, if you feel (3) it's probably that time of the month. ",
    "Nonsense, I'm sure the boys are crazy about you. ",
    "Isn't that just because of the social media you ladies are into these days?"
  ]],
  ["* i am* @angry *", [
    "Feeling a little overemotional, aren't we?",
    "Oh, you're (3)? Aren't you exaggerating a little?",
    "Calm down, there's nothing to be so (3) about."
  ]],
  ["* i am* @happy *", [
    "Of course you're (3), pretty girl like you!",
    "Have I helped you feel (3) ?",
    "What makes you (3) just now ?",
    "See? That's what happens when you listen to me."
  ]],
  ["* i was *", [
    "goto was"
  ]],
  ["* i @belief i *", [
    "Isn't that just in you imagination?",
    "Maybe if you think you (3) you should stop reading nonsense on the internet.",
    "Do you really doubt you (3) ?"
  ]],
  ["* i* @belief *you *", [
    "goto you"
  ]],
  ["* i am *", [
    "You're (2)? I'm not sure you're cool enough to talk to me.",
    "How long have you been (2) ?",
    "Do you believe it is normal to be (2) ?",
    "Do you enjoy being (2) ?",
    "Do you know anyone else who is (2) ?",
    "Are you really (2), or are you maybe exaggerating?"
  ]],
  ["* i @cannot *", [
    "How do you know that you can't (3) ?",
    "Have you tried ?",
    "Perhaps you could (3) now.",
    "Do you really want to be able to (3) ?",
    "What if you could (3) ?"
  ]],
  ["* i don't *", [
    "Don't you really (2) ?",
    "Why don't you (2) ?",
    "Do you wish to be able to (2) ?",
    "Does that trouble you ?"
  ]],
  ["* i feel *", [
    "Tell me more about such feelings.",
    "Do you often feel (2) ?",
    "Do you enjoy feeling (2) ?",
    "Of what does feeling (2) remind you ?"
  ]],
  ["* i * you *", [
    "Perhaps in your fantasies we (2) each other.",
    "Do you want to (2) me ?",
    "Do you (2) anyone else ?"
  ]],
  ["*", [
    "You say (1) ?",
    "Can you elaborate on that ?",
    "Do you say (1) for some specific reason ?",
    "Hmm.",
  ]]
]],
["you", 0, [
  ["* you remind me of *", [
    "goto alike"
  ]],
  ["* you are *", [
    "(2)? I believe I'm just confident.",
    "Does it please you to believe I am (2) ?",
    "Do you sometimes wish you were (2) ?",
    "Perhaps you would like to be (2)."
  ]],
  ["* you* me *", [
    "Why do you think I (2) you ?",
    "You like to think I (2) you -- don't you ?",
    "What makes you think I (2) you ?",
    "Really, I (2) you ?",
    "Do you wish to believe I (2) you ?",
    "Suppose I did (2) you -- what would that mean ?",
    "Does someone else believe I (2) you ?"
  ]],
  ["* you *", [
    "We were discussing you -- not me.",
    "Oh, I (2) ?",
    "You're not really talking about me -- are you ?",
    "What are your feelings now ?"
  ]]
]],
["yes", 0, [
  ["*", [
    "I like your attitude.",
    "You're sure?",
    "Haha, I'm going to make you my Friday girlfriend.",
    "Mhmm.",
    "Yeah, you would think so."
  ]]
]],
["no", 0, [
  ["* no one *", [
    "Are you sure, no one (2) ?",
    "Surely someone (2) .",
    "No one? I find girls often exaggerate like that.",
    "Can you think of anyone at all ?",
    "Are you thinking of a very special person ?",
    "Who, may I ask ?",
    "You have a particular person in mind, don't you ?",
    "Who do you think you are talking about ?"
  ]],
  ["*", [
    "Are you saying no just to be negative?",
    "You are being a bit negative.",
    "Maybe you should calm down, sweetie.",
    "Why 'no' ?"
  ]]
]],
["my", 2, [
  ["$ * my *", [
    "Does that have anything to do with the fact that your (2) ?",
    "Lets discuss further why your (2).",
    "Earlier you said your (2).",
    "But your (2)."
  ]],
  ["* my* @family *", [
    "Tell me more about your family.",
    "Who else in your family (4) ?",
    "Is your (3) also a bit melodramatic ?",
    "What else comes to your mind when you think of your (3) ?"
  ]],
  ["* my *", [
    "Your (2) ?",
    "Why do you say your (2) ?",
    "Does that suggest anything else which belongs to you ?",
    "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
  ["* can you *", [
    "You believe I can (2) don't you ?",
    "goto what",
    "You want me to be able to (2).",
    "Perhaps you would like to be able to (2) yourself."
  ]],
  ["* can i *", [
    "Whether or not you can (2) depends on you more than on me.",
    "Do you want to be able to (2) ?",
    "Perhaps you don't want to (2).",
    "goto what"
  ]]
]],
["what", 0, [
  ["*", [
    "Why do you ask ?",
    "Does that question interest you ?",
    "What is it you really want to know ?",
    "Are such questions much on your mind ?",
    "What answer would please you most ?",
    "What do you think ?",
    "What comes to mind when you ask that ?",
    "Have you asked such questions before ?",
    "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
  ["who *", [
    "goto what"
  ]]
]],
["when", 0, [
  ["when *", [
    "goto what"
  ]]
]],
["where", 0, [
  ["where *", [
    "goto what"
  ]]
]],
["how", 0, [
  ["how *", [
    "goto what"
  ]]
]],
["because", 0, [
  ["*", [
    "Is that the real reason ?",
    "Are you sure that's true ?",
    "Does that reason seem to explain anything else ?",
    "What other reasons might there be ?"
  ]]
]],
["why", 0, [
  ["* why don't you *", [
    "Do you believe I don't (2) ?",
    "Perhaps I will (2) in good time.",
    "Should you (2) yourself ?",
    "You want me to (2) ?",
    "goto what"
  ]],
  ["* why can't i *", [
    "Do you think you should be able to (2) ?",
    "Do you want to be able to (2) ?",
    "Do you believe this will help you to (2) ?",
    "Have you any idea why you can't (2) ?",
    "goto what"
  ]],
  ["*", [
    "goto what"
  ]]
]],
["everyone", 2, [
  ["* @everyone *", [
    "Really, (2) ?",
    "Surely not (2).",
    "Can you think of anyone in particular ?",
    "Who, for example?",
    "Are you thinking of a very special person ?",
    "Who, may I ask ?",
    "Someone special perhaps ?",
    "You have a particular person in mind, don't you ?",
    "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
  ["*", [
    "goto everyone"
  ]]
]],
["nobody", 2, [
  ["*", [
    "goto everyone"
  ]]
]],
["noone", 2, [
  ["*", [
    "goto everyone"
  ]]
]],
["always", 1, [
  ["*", [
    "Can you think of a specific example ?",
    "When ?",
    "What incident are you thinking of ?",
    "Really, always ?"
  ]]
]],
["alike", 10, [
  ["*", [
    "In what way ?",
    "What resemblence do you see ?",
    "What does that similarity suggest to you ?",
    "What other connections do you see ?",
    "What do you suppose that resemblence means ?",
    "What is the connection, do you suppose ?",
    "Could there really be some connection ?",
    "How ?"
  ]]
]],
["like", 10, [
  ["* @be *like *", [
    "goto alike"
  ]]
]],
["different", 0, [
  ["*", [
    "How is it different ?",
    "What differences do you see ?",
    "What does that difference suggest to you ?",
    "What other distinctions do you see ?",
    "What do you suppose that disparity means ?",
    "Could there be some connection, do you suppose ?",
    "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var puaPostTransforms = [
  / old old/g, " old",
  /\bthey were( not)? me\b/g, "it was$1 me",
  /\bthey are( not)? me\b/g, "it is$1 me",
  /Are they( always)? me\b/, "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
  /\bI to have (\w+)/, "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
