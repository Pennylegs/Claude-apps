// NHL Players Database with Career Statistics and Unique Hints
const NHL_PLAYERS = [
    {
        name: "Wayne Gretzky",
        aliases: ["gretzky", "wayne", "the great one"],
        stats: {
            "Goals": "894",
            "Assists": "1,963",
            "Points": "2,857",
            "Games Played": "1,487",
            "Stanley Cups": "4",
            "Hart Trophies (MVP)": "9",
            "Art Ross Trophies": "10",
            "All-Star Selections": "18"
        },
        hint: "Known as 'The Great One.' His #99 is retired league-wide. Even if you removed all his goals, he'd still be the all-time points leader on assists alone."
    },
    {
        name: "Mario Lemieux",
        aliases: ["lemieux", "mario", "super mario", "le magnifique"],
        stats: {
            "Goals": "690",
            "Assists": "1,033",
            "Points": "1,723",
            "Games Played": "915",
            "Stanley Cups": "2",
            "Hart Trophies (MVP)": "3",
            "Art Ross Trophies": "6",
            "Points Per Game": "1.883"
        },
        hint: "Scored a goal in 5 different ways in a single game (even strength, power play, shorthanded, penalty shot, empty net). Later became the owner of the team he played for."
    },
    {
        name: "Gordie Howe",
        aliases: ["howe", "gordie", "mr hockey"],
        stats: {
            "Goals": "801",
            "Assists": "1,049",
            "Points": "1,850",
            "Games Played": "1,767",
            "Stanley Cups": "4",
            "Hart Trophies (MVP)": "6",
            "All-Star Selections": "23",
            "Seasons Played": "26"
        },
        hint: "Known as 'Mr. Hockey.' Played in the NHL across 5 decades and played professionally alongside both of his sons."
    },
    {
        name: "Bobby Orr",
        aliases: ["orr", "bobby"],
        stats: {
            "Goals": "270",
            "Assists": "645",
            "Points": "915",
            "Games Played": "657",
            "Stanley Cups": "2",
            "Norris Trophies": "8",
            "Hart Trophies (MVP)": "3",
            "Points Per Game": "1.393"
        },
        hint: "Revolutionized the defenseman position. Won 8 consecutive Norris Trophies and is captured in one of hockey's most iconic photos — flying through the air after scoring the 1970 Cup-winning goal."
    },
    {
        name: "Sidney Crosby",
        aliases: ["crosby", "sid", "sid the kid"],
        stats: {
            "Goals": "590+",
            "Assists": "1,000+",
            "Points": "1,590+",
            "Games Played": "1,300+",
            "Stanley Cups": "3",
            "Hart Trophies (MVP)": "2",
            "Art Ross Trophies": "2",
            "Conn Smythe Trophies": "2"
        },
        hint: "Nicknamed 'Sid the Kid' when drafted 1st overall in 2005. Became the youngest captain to win the Stanley Cup and won back-to-back Cups in 2016-17."
    },
    {
        name: "Alexander Ovechkin",
        aliases: ["ovechkin", "ovi", "alex", "the great eight", "gr8"],
        stats: {
            "Goals": "870+",
            "Assists": "680+",
            "Points": "1,550+",
            "Games Played": "1,450+",
            "Stanley Cups": "1",
            "Hart Trophies (MVP)": "3",
            "Rocket Richard Trophies": "9",
            "All-Star Selections": "13"
        },
        hint: "Russian left wing chasing Wayne Gretzky's all-time goals record. Won 9 goal-scoring titles and has spent his entire career in Washington."
    },
    {
        name: "Mark Messier",
        aliases: ["messier", "mark", "the moose"],
        stats: {
            "Goals": "694",
            "Assists": "1,193",
            "Points": "1,887",
            "Games Played": "1,756",
            "Stanley Cups": "6",
            "Hart Trophies (MVP)": "2",
            "All-Star Selections": "15",
            "Playoff Points": "295"
        },
        hint: "Won 6 Stanley Cups across two teams. Famously guaranteed a playoff win against the Devils in 1994, then delivered with a hat trick."
    },
    {
        name: "Jaromir Jagr",
        aliases: ["jagr", "jaromir"],
        stats: {
            "Goals": "766",
            "Assists": "1,155",
            "Points": "1,921",
            "Games Played": "1,733",
            "Stanley Cups": "2",
            "Hart Trophies (MVP)": "1",
            "Art Ross Trophies": "5",
            "Scoring Titles": "5"
        },
        hint: "Czech legend known for his iconic mullet. Played in the NHL until age 45 and wore #68 in honor of the 1968 Prague Spring."
    },
    {
        name: "Patrick Roy",
        aliases: ["roy", "patrick", "saint patrick"],
        stats: {
            "Wins": "551",
            "Goals Against Avg": "2.54",
            "Save Percentage": ".910",
            "Shutouts": "66",
            "Games Played": "1,029",
            "Stanley Cups": "4",
            "Conn Smythe Trophies": "3",
            "Vezina Trophies": "3"
        },
        hint: "Won 4 Cups with two teams and 3 Conn Smythe Trophies. Famous for talking to his goalposts and for his mid-game trade demand after being humiliated by his own coach."
    },
    {
        name: "Martin Brodeur",
        aliases: ["brodeur", "martin", "marty"],
        stats: {
            "Wins": "691",
            "Goals Against Avg": "2.24",
            "Save Percentage": ".912",
            "Shutouts": "125",
            "Games Played": "1,266",
            "Stanley Cups": "3",
            "Vezina Trophies": "4",
            "All-Star Selections": "10"
        },
        hint: "Holds the NHL records for most wins (691) and shutouts (125) by a goaltender. Also scored 3 goals as a goalie during his career."
    },
    {
        name: "Nicklas Lidstrom",
        aliases: ["lidstrom", "nicklas", "nick", "the perfect human"],
        stats: {
            "Goals": "264",
            "Assists": "878",
            "Points": "1,142",
            "Games Played": "1,564",
            "Stanley Cups": "4",
            "Norris Trophies": "7",
            "Plus/Minus": "+450",
            "All-Star Selections": "12"
        },
        hint: "Swedish defenseman nicknamed 'The Perfect Human.' Won 7 Norris Trophies and spent his entire 20-season career in Detroit."
    },
    {
        name: "Steve Yzerman",
        aliases: ["yzerman", "steve", "stevie y", "the captain"],
        stats: {
            "Goals": "692",
            "Assists": "1,063",
            "Points": "1,755",
            "Games Played": "1,514",
            "Stanley Cups": "3",
            "Conn Smythe Trophy": "1",
            "Selke Trophy": "1",
            "All-Star Selections": "10"
        },
        hint: "Captained the Red Wings for 19 seasons, the longest tenure in NHL history. Transformed from a pure scorer into a two-way forward to win championships."
    },
    {
        name: "Joe Sakic",
        aliases: ["sakic", "joe", "burnaby joe", "super joe"],
        stats: {
            "Goals": "625",
            "Assists": "1,016",
            "Points": "1,641",
            "Games Played": "1,378",
            "Stanley Cups": "2",
            "Hart Trophy (MVP)": "1",
            "Conn Smythe Trophy": "1",
            "All-Star Selections": "6"
        },
        hint: "Known for his lethal wrist shot. Captained the Avalanche to 2 Cups and was the first player to receive the Stanley Cup from commissioner Bettman in 1996."
    },
    {
        name: "Connor McDavid",
        aliases: ["mcdavid", "connor", "mcspeedy"],
        stats: {
            "Goals": "335+",
            "Assists": "570+",
            "Points": "900+",
            "Games Played": "600+",
            "Stanley Cups": "0",
            "Hart Trophies (MVP)": "4",
            "Art Ross Trophies": "5",
            "Ted Lindsay Awards": "4"
        },
        hint: "Considered the fastest skater in the NHL. Drafted 1st overall in 2015 and became the youngest captain in Edmonton's history at age 19."
    },
    {
        name: "Nathan MacKinnon",
        aliases: ["mackinnon", "nathan", "nate", "mack"],
        stats: {
            "Goals": "300+",
            "Assists": "450+",
            "Points": "750+",
            "Games Played": "750+",
            "Stanley Cups": "1",
            "Hart Trophy (MVP)": "1",
            "Conn Smythe Trophy": "1",
            "All-Star Selections": "5"
        },
        hint: "From Cole Harbour, Nova Scotia — the same hometown as Sidney Crosby. Won the Calder Trophy as Rookie of the Year and a Cup with Colorado."
    },
    {
        name: "Auston Matthews",
        aliases: ["matthews", "auston", "papi"],
        stats: {
            "Goals": "350+",
            "Assists": "250+",
            "Points": "600+",
            "Games Played": "550+",
            "Stanley Cups": "0",
            "Hart Trophy (MVP)": "1",
            "Rocket Richard Trophies": "3",
            "Ted Lindsay Award": "1"
        },
        hint: "Born in California and raised in Arizona. First American to be drafted 1st overall in over 10 years. Scored 4 goals in his NHL debut."
    },
    {
        name: "Nikita Kucherov",
        aliases: ["kucherov", "nikita", "kuch"],
        stats: {
            "Goals": "300+",
            "Assists": "470+",
            "Points": "770+",
            "Games Played": "650+",
            "Stanley Cups": "2",
            "Hart Trophy (MVP)": "1",
            "Art Ross Trophy": "1",
            "Ted Lindsay Award": "1"
        },
        hint: "Russian forward who posted 128 points in 2018-19, the most by a player since 1996. Won back-to-back Cups with Tampa Bay."
    },
    {
        name: "Leon Draisaitl",
        aliases: ["draisaitl", "leon", "drai"],
        stats: {
            "Goals": "310+",
            "Assists": "420+",
            "Points": "730+",
            "Games Played": "680+",
            "Stanley Cups": "0",
            "Hart Trophy (MVP)": "1",
            "Art Ross Trophy": "1",
            "Ted Lindsay Award": "1"
        },
        hint: "German-born center who won the Hart Trophy and Art Ross in the same season. Forms a dominant duo with Connor McDavid in Edmonton."
    },
    {
        name: "Cale Makar",
        aliases: ["makar", "cale"],
        stats: {
            "Goals": "100+",
            "Assists": "250+",
            "Points": "350+",
            "Games Played": "350+",
            "Stanley Cups": "1",
            "Norris Trophies": "2",
            "Conn Smythe Trophy": "1",
            "Calder Trophy": "1"
        },
        hint: "Won the Conn Smythe as playoff MVP as a 23-year-old. Played his first NHL game directly after his college season ended at UMass."
    },
    {
        name: "Ray Bourque",
        aliases: ["bourque", "ray"],
        stats: {
            "Goals": "410",
            "Assists": "1,169",
            "Points": "1,579",
            "Games Played": "1,612",
            "Stanley Cups": "1",
            "Norris Trophies": "5",
            "All-Star Selections": "19",
            "Plus/Minus": "+527"
        },
        hint: "Played 21 seasons in Boston before being traded to Colorado, where he finally won the Cup at age 40. Joe Sakic immediately handed him the trophy."
    },
    {
        name: "Phil Esposito",
        aliases: ["esposito", "phil"],
        stats: {
            "Goals": "717",
            "Assists": "873",
            "Points": "1,590",
            "Games Played": "1,282",
            "Stanley Cups": "2",
            "Hart Trophies (MVP)": "2",
            "Art Ross Trophies": "5",
            "Scoring Titles": "5"
        },
        hint: "First player to score 100 points and first to score 76 goals in a season. Later founded the Tampa Bay Lightning expansion franchise."
    },
    {
        name: "Marcel Dionne",
        aliases: ["dionne", "marcel", "little beaver"],
        stats: {
            "Goals": "731",
            "Assists": "1,040",
            "Points": "1,771",
            "Games Played": "1,348",
            "Stanley Cups": "0",
            "Art Ross Trophy": "1",
            "Lady Byng Trophies": "2",
            "All-Star Selections": "8"
        },
        hint: "Third all-time in goals when he retired but never made it past the second round of the playoffs. Spent his prime years on the 'Triple Crown Line' in Los Angeles."
    },
    {
        name: "Mike Bossy",
        aliases: ["bossy", "mike"],
        stats: {
            "Goals": "573",
            "Assists": "553",
            "Points": "1,126",
            "Games Played": "752",
            "Stanley Cups": "4",
            "Conn Smythe Trophy": "1",
            "Calder Trophy": "1",
            "Goals Per Game": "0.762"
        },
        hint: "Holds the highest goals-per-game average in NHL history. Scored 50 goals in 50 games and won 4 straight Stanley Cups with the Islanders."
    },
    {
        name: "Guy Lafleur",
        aliases: ["lafleur", "guy", "the flower"],
        stats: {
            "Goals": "560",
            "Assists": "793",
            "Points": "1,353",
            "Games Played": "1,126",
            "Stanley Cups": "5",
            "Hart Trophies (MVP)": "2",
            "Art Ross Trophies": "3",
            "Conn Smythe Trophy": "1"
        },
        hint: "Known as 'The Flower,' this Canadian icon played helmetless with his hair flowing behind him. Won 5 Cups with Montreal."
    },
    {
        name: "Brett Hull",
        aliases: ["hull", "brett", "the golden brett"],
        stats: {
            "Goals": "741",
            "Assists": "650",
            "Points": "1,391",
            "Games Played": "1,269",
            "Stanley Cups": "2",
            "Hart Trophy (MVP)": "1",
            "Lady Byng Trophy": "1",
            "All-Star Selections": "8"
        },
        hint: "Son of hockey legend Bobby Hull. Scored 86 goals in 1990-91 and won a controversial Stanley Cup in 1999 with his skate in the crease."
    },
    {
        name: "Dominik Hasek",
        aliases: ["hasek", "dominik", "the dominator"],
        stats: {
            "Wins": "389",
            "Goals Against Avg": "2.20",
            "Save Percentage": ".922",
            "Shutouts": "81",
            "Games Played": "735",
            "Stanley Cups": "2",
            "Vezina Trophies": "6",
            "Hart Trophies (MVP)": "2"
        },
        hint: "Czech goaltender who won 6 Vezina Trophies and is one of only two goalies to win the Hart Trophy. Known for his acrobatic, unorthodox style."
    },
    {
        name: "Teemu Selanne",
        aliases: ["selanne", "teemu", "the finnish flash"],
        stats: {
            "Goals": "684",
            "Assists": "773",
            "Points": "1,457",
            "Games Played": "1,451",
            "Stanley Cups": "1",
            "Rocket Richard Trophy": "1",
            "Calder Trophy": "1",
            "All-Star Selections": "10"
        },
        hint: "Known as 'The Finnish Flash.' Set the rookie record with 76 goals and celebrated by shooting his glove out of the air like a clay pigeon."
    },
    {
        name: "Peter Forsberg",
        aliases: ["forsberg", "peter", "foppa"],
        stats: {
            "Goals": "249",
            "Assists": "636",
            "Points": "885",
            "Games Played": "708",
            "Stanley Cups": "2",
            "Hart Trophy (MVP)": "1",
            "Art Ross Trophy": "1",
            "Points Per Game": "1.250"
        },
        hint: "Swedish center whose shootout goal at the 1994 Olympics became a postage stamp in Sweden. Injuries cut short what was one of the most dominant careers ever."
    },
    {
        name: "Paul Coffey",
        aliases: ["coffey", "paul"],
        stats: {
            "Goals": "396",
            "Assists": "1,135",
            "Points": "1,531",
            "Games Played": "1,409",
            "Stanley Cups": "4",
            "Norris Trophies": "3",
            "All-Star Selections": "14",
            "Plus/Minus": "+292"
        },
        hint: "One of the greatest skating defensemen ever. Scored 48 goals as a defenseman in one season, second only to Bobby Orr's 46."
    },
    {
        name: "Maurice Richard",
        aliases: ["richard", "maurice", "rocket", "the rocket"],
        stats: {
            "Goals": "544",
            "Assists": "421",
            "Points": "965",
            "Games Played": "978",
            "Stanley Cups": "8",
            "Hart Trophy (MVP)": "1",
            "All-Star Selections": "14",
            "Seasons Led in Goals": "5"
        },
        hint: "First player to score 50 goals in 50 games and 500 career goals. The NHL's goal-scoring trophy is named after him. His suspension in 1955 caused a riot in Montreal."
    },
    {
        name: "Henrik Lundqvist",
        aliases: ["lundqvist", "henrik", "king henrik", "the king"],
        stats: {
            "Wins": "459",
            "Goals Against Avg": "2.43",
            "Save Percentage": ".918",
            "Shutouts": "64",
            "Games Played": "887",
            "Stanley Cups": "0",
            "Vezina Trophy": "1",
            "All-Star Selections": "5"
        },
        hint: "Swedish goaltender who spent 15 seasons as the face of the New York Rangers. Known as much for his fashion sense as his play. Never won a Cup despite a Finals appearance."
    },
    {
        name: "Carey Price",
        aliases: ["price", "carey"],
        stats: {
            "Wins": "361",
            "Goals Against Avg": "2.51",
            "Save Percentage": ".917",
            "Shutouts": "49",
            "Games Played": "712",
            "Stanley Cups": "0",
            "Vezina Trophy": "1",
            "Hart Trophy (MVP)": "1"
        },
        hint: "Indigenous Canadian goaltender from Anahim Lake, BC. One of the rare goalies to win both the Hart and Vezina in the same season (2015). Spent his entire career in Montreal."
    },
    {
        name: "Patrick Kane",
        aliases: ["kane", "patrick", "kaner"],
        stats: {
            "Goals": "470+",
            "Assists": "770+",
            "Points": "1,240+",
            "Games Played": "1,250+",
            "Stanley Cups": "3",
            "Conn Smythe Trophy": "1",
            "Hart Trophy (MVP)": "1",
            "Art Ross Trophy": "1"
        },
        hint: "American winger who scored the Cup-winning goal in 2010 — a goal so unusual that no one initially saw it go in. Won 3 Cups with Chicago."
    },
    {
        name: "Jonathan Toews",
        aliases: ["toews", "jonathan", "captain serious"],
        stats: {
            "Goals": "370+",
            "Assists": "510+",
            "Points": "880+",
            "Games Played": "1,050+",
            "Stanley Cups": "3",
            "Conn Smythe Trophy": "1",
            "Selke Trophies": "1",
            "All-Star Selections": "6"
        },
        hint: "Nicknamed 'Captain Serious' for his intense demeanor. Won the Conn Smythe at age 22 and led Chicago to 3 Cups in 6 seasons."
    },
    {
        name: "Erik Karlsson",
        aliases: ["karlsson", "erik", "ek"],
        stats: {
            "Goals": "180+",
            "Assists": "580+",
            "Points": "760+",
            "Games Played": "900+",
            "Stanley Cups": "0",
            "Norris Trophies": "2",
            "All-Star Selections": "6",
            "Points Per Game": "0.84"
        },
        hint: "Swedish offensive defenseman who won back-to-back Norris Trophies with Ottawa. Returned to play in the 2017 playoffs while playing on a broken foot."
    },
    {
        name: "Jarome Iginla",
        aliases: ["iginla", "jarome", "iggy"],
        stats: {
            "Goals": "625",
            "Assists": "675",
            "Points": "1,300",
            "Games Played": "1,554",
            "Stanley Cups": "0",
            "Rocket Richard Trophies": "2",
            "Art Ross Trophy": "1",
            "All-Star Selections": "6"
        },
        hint: "One of the greatest Black players in NHL history. Spent 16 seasons as the heart of the Calgary Flames and lit the Olympic cauldron in Vancouver."
    },
    {
        name: "Mats Sundin",
        aliases: ["sundin", "mats"],
        stats: {
            "Goals": "564",
            "Assists": "785",
            "Points": "1,349",
            "Games Played": "1,346",
            "Stanley Cups": "0",
            "All-Star Selections": "8",
            "Olympic Gold Medals": "0",
            "World Championship Gold": "3"
        },
        hint: "First European player to be drafted 1st overall (1989). Captained the Toronto Maple Leafs for 11 seasons."
    }
];
