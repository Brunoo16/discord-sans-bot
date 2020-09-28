const sansQuotes = [
    `heya.`,
    `do you wanna have a bad time?`,
    `it's a beautiful day outside. birds are singing, flowers are blooming... on days like these, kids like you...`,
    `what? you think i'm just gonna stand there and take it?`,
    `our reports showed a massive anomaly in the timespace continuum. timelines jumping left and right, stopping and starting...`,
    `until suddenly, everything ends.`,
    `you can't understand how this feels.`,
    `look. i gave up trying to go back a long time ago.`,
    `you'll get bored here. if you haven't gotten bored already, i mean. and then, you'll finally quit.`,
    `welp, it was worth a shot. guess you like doing things the hard way, huh?`,
    `but that's ridiculous, right? yeah, you're the type of person who won't EVER be happy.`,
    `geeettttttt dunked on!!! if we're really friends... you won't come back.`,
    `to be blunt... it makes it kind of hard to give it my all.`,
    `all i know is... seeing what comes next... i can't afford not to care anymore.`,
    `huh. always wondered why people never use their strongest attack first.`,
    `you've been busy, huh?`,
    `this is why i never make promises.`,
    `you look frustrated about something.`,
    `guess i'm pretty good at my job, huh?`,
    `suffice to say, you look really... unsatisfied.`,
    `let's just get to the point.`,
    `that expression that you're wearing... well, i won't grace it with a description.`,
    `sorry, old lady.`
];

module.exports.getQuote = () => {
    return sansQuotes[Math.floor(Math.random() * sansQuotes.length)];
}