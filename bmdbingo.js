var bingoList = [];
bingoList[1] = [
  { name: "A NPC goes into orbit", types: ["NPC"] },
  { name: "Chat makes a bad joke Vinny calls it out", types: ["chat"]}
];
bingoList[2] = [
  { name: "AI breaks (walking into walls, etc...)", types: ["AI","NPC"] },
  { name: "Cicero voice", types: ["Vinny", "quotes"] }
];
bingoList[3] = [
  { name: "Vinny 'people' watches", types: ["Vinny","NPC"] },
  { name: "Vinny romances", types: ["progress"] }
];
bingoList[4] = [
  { name: "Unsolicited life story from nearby NPC", types: ["NPC"] },
  { name: "Vinny ruins the sanctity of marriage once again.", types: ["progress"] }
];
bingoList[5] = [
  { name: "Vinny's mannequins are out to kill him again", types: ["NPC","housing"] },
  { name: "SUPLEX!!!", types: ["Vinny"] }
];
bingoList[6] = [
  { name: "Extreme NPC mood swings", types: ["NPC"] },
  { name: "Vinny toys with a Bard.", types: ["Vinny"] }
];
bingoList[7] = [
  { name: "Serana's revived NPC goes 'uhhhhh' at an inappropriate time", types: ["Serana"] },
  { name: "Music won't stop playing.", types: ["bugs"]}
];
bingoList[8] = [
  { name: "Story plot continues while more urgent things are going on", types: ["progress"] },
  { name: "Wildlife gets stuck", types: ["NPC"] }
];
bingoList[9] = [
  { name: "Vinny saves wildlife", types: ["NPC","Vinny"] },
  { name: "'TODD!!!'", types: ["quote"] }
];
bingoList[10] = [
  { name: "'WHAT DOES IT MEAN?'", types: ["quote"] },
  { name: "Objects moving for no apparent reason", types: ["glitch"] }
];
bingoList[11] = [
  { name: "Objects stuck in things with no logical explanation", types: ["glitch"] },
  { name: "Vinny dies", types: ["progress"] }
];
bingoList[12] = [
  { name: "Vinny calls Lydia 'Lyn' or another wrong name", types: ["NPC","Vinny"] },
  { name: "Vinny does another immoral act that makes us question if he really is the good guy", types: ["Vinny"] }
];
bingoList[13] = [
  { name: "Psychic guards", types: ["NPC"] },
  { name: "A child discovers a dead body", types: ["NPC"] }
];
bingoList[14] = [
  { name: "Vinny walks on water/air/other like the second coming of Reptile Christ", types: ["skill"] },
  { name: "Caillou", types: ["NPC"] }
];
bingoList[15] = [
  { name: "NPCs talking a casual walk through frigid waters", types: ["NPC"] },
  { name: "Lurbuk", types: ["whoknows"] }
];
bingoList[16] = [
  { name: "NPC comments on something they just killed escaping/not having been murdered by them", types: ["NPC"] },
  { name: "Vinny plays with corpses", types: ["Vinny"] }
];
bingoList[17] = [
  { name: "'Some people may have never seen Skyrim before'", types: ["quote"] },
  { name: "Teletubby voice", types: ["Vinny"] }
];
bingoList[18] = [
  { name: "Manadnach", types: ["quote"] },
  { name: "BladeRunner", types: ["reference"] }
];
bingoList[19] = [
  { name: "Vinny pleads with futility to an NPC", types: ["Vinny"] },
  { name: "Vinny 'Parkours' his way around because the path isnt obvious", types: ["Vinny"] }
];
bingoList[20] = [
  { name: "'Bobs / Robertsons'", types: ["NPC"] },
  { name: "Vinny puts his dictionary class to good use", types: ["Vinny"] }
];
bingoList[21] = [
  { name: "Ironically appropriate text in conversation", types: ["quote"] },
  { name: "Multiple NPCs walking on each other's heels in line", types: ["NPC"] }
];
bingoList[22] = [
  { name: "Vinny doesn't give a shit about NPCs problems", types: ["Vinny","progress"] },
  { name: "Vinny admires his archery", types: ["skill"] }
];
bingoList[23] = [
  { name: "'Please tell me its not a dragon...' (its a dragon)", types: ["quote"] },
  { name: "Combat music refuses to stop", types: ["audio"] }
];
bingoList[24] = [
  { name: "Game crashes", types: ["glitch"] },
  { name: "Serana reacts as if she knows what Vinny just said", types: ["NPC","Vinny"] }
];
bingoList[25] = [
  { name: "'It just works.'", types: ["quote"] },
  { name: "Screech/loud scratch noise", types: ["audio"] }
];

$(function() { srl.bingo(bingoList, 5); });
freespace = "img/bmd.png";