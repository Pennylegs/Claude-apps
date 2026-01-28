// NBA Players Database with Career Statistics and Unique Hints
const NBA_PLAYERS = [
    {
        name: "Michael Jordan",
        aliases: ["jordan", "mj", "air jordan"],
        stats: {
            "Points Per Game": "30.1",
            "Rebounds Per Game": "6.2",
            "Assists Per Game": "5.3",
            "Steals Per Game": "2.3",
            "Games Played": "1,072",
            "Championships": "6",
            "MVP Awards": "5",
            "All-Star Selections": "14"
        },
        hint: "Won 6 Finals MVPs with the same team and famously wore #23. Also played professional baseball."
    },
    {
        name: "LeBron James",
        aliases: ["lebron", "king james", "the king", "bron"],
        stats: {
            "Points Per Game": "27.1",
            "Rebounds Per Game": "7.5",
            "Assists Per Game": "7.4",
            "Steals Per Game": "1.5",
            "Games Played": "1,500+",
            "Championships": "4",
            "MVP Awards": "4",
            "All-Star Selections": "20"
        },
        hint: "The NBA's all-time leading scorer. Won championships with three different franchises and was drafted #1 overall straight out of high school."
    },
    {
        name: "Kobe Bryant",
        aliases: ["kobe", "black mamba", "mamba"],
        stats: {
            "Points Per Game": "25.0",
            "Rebounds Per Game": "5.2",
            "Assists Per Game": "4.7",
            "Steals Per Game": "1.4",
            "Games Played": "1,346",
            "Championships": "5",
            "MVP Awards": "1",
            "All-Star Selections": "18"
        },
        hint: "Scored 81 points in a single game (2nd most in NBA history). Spent his entire 20-year career with one franchise in Los Angeles."
    },
    {
        name: "Kareem Abdul-Jabbar",
        aliases: ["kareem", "abdul-jabbar", "abdul jabbar"],
        stats: {
            "Points Per Game": "24.6",
            "Rebounds Per Game": "11.2",
            "Assists Per Game": "3.6",
            "Blocks Per Game": "2.6",
            "Games Played": "1,560",
            "Championships": "6",
            "MVP Awards": "6",
            "All-Star Selections": "19"
        },
        hint: "Invented the 'skyhook' shot and held the all-time scoring record for 39 years. Born Lew Alcindor."
    },
    {
        name: "Magic Johnson",
        aliases: ["magic", "earvin johnson"],
        stats: {
            "Points Per Game": "19.5",
            "Rebounds Per Game": "7.2",
            "Assists Per Game": "11.2",
            "Steals Per Game": "1.9",
            "Games Played": "906",
            "Championships": "5",
            "MVP Awards": "3",
            "All-Star Selections": "12"
        },
        hint: "A 6'9\" point guard who won a championship as a rookie, playing center in the Finals. Famous rivalry with Larry Bird."
    },
    {
        name: "Larry Bird",
        aliases: ["bird", "larry legend"],
        stats: {
            "Points Per Game": "24.3",
            "Rebounds Per Game": "10.0",
            "Assists Per Game": "6.3",
            "Steals Per Game": "1.7",
            "Games Played": "897",
            "Championships": "3",
            "MVP Awards": "3",
            "All-Star Selections": "12"
        },
        hint: "Won three consecutive MVP awards (1984-86) and was known for his trash talk. Played his entire career in Boston."
    },
    {
        name: "Shaquille O'Neal",
        aliases: ["shaq", "shaquille", "the big diesel", "diesel"],
        stats: {
            "Points Per Game": "23.7",
            "Rebounds Per Game": "10.9",
            "Assists Per Game": "2.5",
            "Blocks Per Game": "2.3",
            "Games Played": "1,207",
            "Championships": "4",
            "MVP Awards": "1",
            "All-Star Selections": "15"
        },
        hint: "One of the most dominant centers ever. Released multiple rap albums and appeared in movies like 'Kazaam'."
    },
    {
        name: "Tim Duncan",
        aliases: ["duncan", "the big fundamental"],
        stats: {
            "Points Per Game": "19.0",
            "Rebounds Per Game": "10.8",
            "Assists Per Game": "3.0",
            "Blocks Per Game": "2.2",
            "Games Played": "1,392",
            "Championships": "5",
            "MVP Awards": "2",
            "All-Star Selections": "15"
        },
        hint: "Known as 'The Big Fundamental.' Played 19 seasons with the same team in Texas and was a psychology major in college."
    },
    {
        name: "Stephen Curry",
        aliases: ["curry", "steph", "chef curry", "steph curry"],
        stats: {
            "Points Per Game": "24.8",
            "Rebounds Per Game": "4.7",
            "Assists Per Game": "6.4",
            "Steals Per Game": "1.4",
            "3-Pointers Made": "3,700+",
            "Championships": "4",
            "MVP Awards": "2",
            "All-Star Selections": "10"
        },
        hint: "The NBA's all-time leader in 3-pointers made. Won back-to-back MVPs, with one being unanimous. Son of former NBA player Dell Curry."
    },
    {
        name: "Kevin Durant",
        aliases: ["durant", "kd", "the slim reaper", "easy money sniper"],
        stats: {
            "Points Per Game": "27.3",
            "Rebounds Per Game": "7.0",
            "Assists Per Game": "4.4",
            "Blocks Per Game": "1.1",
            "Games Played": "1,000+",
            "Championships": "2",
            "MVP Awards": "1",
            "All-Star Selections": "14"
        },
        hint: "Won Finals MVP in back-to-back years. At 6'10\" was drafted 2nd overall behind Greg Oden in 2007."
    },
    {
        name: "Wilt Chamberlain",
        aliases: ["wilt", "chamberlain", "the big dipper"],
        stats: {
            "Points Per Game": "30.1",
            "Rebounds Per Game": "22.9",
            "Assists Per Game": "4.4",
            "Games Played": "1,045",
            "Championships": "2",
            "MVP Awards": "4",
            "All-Star Selections": "13",
            "Scoring Titles": "7"
        },
        hint: "Scored 100 points in a single game in 1962. Averaged 50.4 PPG for an entire season and never fouled out of a game."
    },
    {
        name: "Bill Russell",
        aliases: ["russell", "bill"],
        stats: {
            "Points Per Game": "15.1",
            "Rebounds Per Game": "22.5",
            "Assists Per Game": "4.3",
            "Games Played": "963",
            "Championships": "11",
            "MVP Awards": "5",
            "All-Star Selections": "12"
        },
        hint: "Won 11 championships in 13 seasons, the most by any player. Also served as a player-coach."
    },
    {
        name: "Hakeem Olajuwon",
        aliases: ["hakeem", "olajuwon", "the dream"],
        stats: {
            "Points Per Game": "21.8",
            "Rebounds Per Game": "11.1",
            "Assists Per Game": "2.5",
            "Blocks Per Game": "3.1",
            "Games Played": "1,238",
            "Championships": "2",
            "MVP Awards": "1",
            "All-Star Selections": "12"
        },
        hint: "Born in Nigeria, led his team to back-to-back titles. Known for his 'Dream Shake' move and is the all-time blocks leader."
    },
    {
        name: "Oscar Robertson",
        aliases: ["oscar", "robertson", "the big o"],
        stats: {
            "Points Per Game": "25.7",
            "Rebounds Per Game": "7.5",
            "Assists Per Game": "9.5",
            "Games Played": "1,040",
            "Championships": "1",
            "MVP Awards": "1",
            "All-Star Selections": "12"
        },
        hint: "Averaged a triple-double for an entire season (1961-62) before Westbrook did it again. His lawsuit helped create NBA free agency."
    },
    {
        name: "Russell Westbrook",
        aliases: ["westbrook", "russ", "brodie"],
        stats: {
            "Points Per Game": "22.0",
            "Rebounds Per Game": "7.4",
            "Assists Per Game": "8.4",
            "Steals Per Game": "1.7",
            "Games Played": "1,100+",
            "Championships": "0",
            "MVP Awards": "1",
            "Triple-Doubles": "199"
        },
        hint: "Holds the NBA record for most career triple-doubles. Averaged a triple-double for four different seasons."
    },
    {
        name: "Charles Barkley",
        aliases: ["barkley", "charles", "sir charles", "the round mound"],
        stats: {
            "Points Per Game": "22.1",
            "Rebounds Per Game": "11.7",
            "Assists Per Game": "3.9",
            "Steals Per Game": "1.5",
            "Games Played": "1,073",
            "Championships": "0",
            "MVP Awards": "1",
            "All-Star Selections": "11"
        },
        hint: "At just 6'6\" was one of the best rebounding forwards ever. Now a famous TV analyst known for his outspoken personality."
    },
    {
        name: "Karl Malone",
        aliases: ["malone", "karl", "the mailman"],
        stats: {
            "Points Per Game": "25.0",
            "Rebounds Per Game": "10.1",
            "Assists Per Game": "3.6",
            "Steals Per Game": "1.4",
            "Games Played": "1,476",
            "Championships": "0",
            "MVP Awards": "2",
            "All-Star Selections": "14"
        },
        hint: "Second all-time in points scored. Formed a legendary pick-and-roll duo with John Stockton in Utah for 18 seasons."
    },
    {
        name: "John Stockton",
        aliases: ["stockton", "john"],
        stats: {
            "Points Per Game": "13.1",
            "Rebounds Per Game": "2.7",
            "Assists Per Game": "10.5",
            "Steals Per Game": "2.2",
            "Games Played": "1,504",
            "Championships": "0",
            "MVP Awards": "0",
            "All-Star Selections": "10"
        },
        hint: "NBA's all-time leader in assists and steals. Played all 19 seasons with Utah and rarely missed games."
    },
    {
        name: "Dirk Nowitzki",
        aliases: ["dirk", "nowitzki"],
        stats: {
            "Points Per Game": "20.7",
            "Rebounds Per Game": "7.5",
            "Assists Per Game": "2.4",
            "Blocks Per Game": "0.8",
            "Games Played": "1,522",
            "Championships": "1",
            "MVP Awards": "1",
            "All-Star Selections": "14"
        },
        hint: "German-born player who revolutionized the stretch-four position. Played 21 seasons with the same Texas team."
    },
    {
        name: "Kevin Garnett",
        aliases: ["garnett", "kg", "the big ticket"],
        stats: {
            "Points Per Game": "17.8",
            "Rebounds Per Game": "10.0",
            "Assists Per Game": "3.7",
            "Blocks Per Game": "1.4",
            "Games Played": "1,462",
            "Championships": "1",
            "MVP Awards": "1",
            "All-Star Selections": "15"
        },
        hint: "Entered the NBA directly from high school in 1995. Famous for his intense demeanor and yelling 'ANYTHING IS POSSIBLE!'"
    },
    {
        name: "Dwyane Wade",
        aliases: ["wade", "d-wade", "flash"],
        stats: {
            "Points Per Game": "22.0",
            "Rebounds Per Game": "4.7",
            "Assists Per Game": "5.4",
            "Steals Per Game": "1.5",
            "Games Played": "1,054",
            "Championships": "3",
            "MVP Awards": "0",
            "All-Star Selections": "13"
        },
        hint: "Won Finals MVP in just his third season. Formed a 'Big Three' with LeBron James and Chris Bosh in Miami."
    },
    {
        name: "Allen Iverson",
        aliases: ["iverson", "ai", "the answer"],
        stats: {
            "Points Per Game": "26.7",
            "Rebounds Per Game": "3.7",
            "Assists Per Game": "6.2",
            "Steals Per Game": "2.2",
            "Games Played": "914",
            "Championships": "0",
            "MVP Awards": "1",
            "Scoring Titles": "4"
        },
        hint: "At 6'0\" was the smallest #1 overall pick and MVP. Famous for his 'practice' press conference and crossover move."
    },
    {
        name: "Giannis Antetokounmpo",
        aliases: ["giannis", "antetokounmpo", "greek freak"],
        stats: {
            "Points Per Game": "23.4",
            "Rebounds Per Game": "9.8",
            "Assists Per Game": "4.9",
            "Blocks Per Game": "1.2",
            "Games Played": "800+",
            "Championships": "1",
            "MVP Awards": "2",
            "All-Star Selections": "8"
        },
        hint: "Born in Greece to Nigerian parents. Won back-to-back MVPs and a championship with Milwaukee. Has four brothers who also played pro basketball."
    },
    {
        name: "Nikola Jokic",
        aliases: ["jokic", "nikola", "the joker"],
        stats: {
            "Points Per Game": "20.9",
            "Rebounds Per Game": "10.4",
            "Assists Per Game": "7.0",
            "Steals Per Game": "1.2",
            "Games Played": "650+",
            "Championships": "2",
            "MVP Awards": "3",
            "All-Star Selections": "6"
        },
        hint: "Serbian center drafted 41st overall who won 3 consecutive MVPs. Known for his exceptional passing and was a 2nd round pick."
    },
    {
        name: "Julius Erving",
        aliases: ["erving", "julius", "dr j", "dr. j"],
        stats: {
            "Points Per Game": "24.2",
            "Rebounds Per Game": "8.5",
            "Assists Per Game": "4.2",
            "Steals Per Game": "1.8",
            "Games Played": "836",
            "Championships": "1",
            "MVP Awards": "1",
            "All-Star Selections": "11"
        },
        hint: "Known as 'Dr. J', he popularized the slam dunk and above-the-rim play. Won 3 championships in the ABA before joining the NBA."
    },
    {
        name: "Scottie Pippen",
        aliases: ["pippen", "scottie"],
        stats: {
            "Points Per Game": "16.1",
            "Rebounds Per Game": "6.4",
            "Assists Per Game": "5.2",
            "Steals Per Game": "2.0",
            "Games Played": "1,178",
            "Championships": "6",
            "MVP Awards": "0",
            "All-Star Selections": "7"
        },
        hint: "Won 6 championships as Michael Jordan's teammate. Known for his elite defense and was part of the original Dream Team."
    },
    {
        name: "David Robinson",
        aliases: ["robinson", "david", "the admiral"],
        stats: {
            "Points Per Game": "21.1",
            "Rebounds Per Game": "10.6",
            "Assists Per Game": "2.5",
            "Blocks Per Game": "3.0",
            "Games Played": "987",
            "Championships": "2",
            "MVP Awards": "1",
            "All-Star Selections": "10"
        },
        hint: "Navy officer nicknamed 'The Admiral'. Played his entire career in San Antonio and is a Naval Academy graduate."
    },
    {
        name: "Patrick Ewing",
        aliases: ["ewing", "patrick"],
        stats: {
            "Points Per Game": "21.0",
            "Rebounds Per Game": "9.8",
            "Assists Per Game": "1.9",
            "Blocks Per Game": "2.4",
            "Games Played": "1,183",
            "Championships": "0",
            "MVP Awards": "0",
            "All-Star Selections": "11"
        },
        hint: "Jamaican-born center who played 15 seasons in New York. First pick in the 1985 draft lottery (often called 'the frozen envelope' draft)."
    },
    {
        name: "Isiah Thomas",
        aliases: ["isiah", "zeke"],
        stats: {
            "Points Per Game": "19.2",
            "Rebounds Per Game": "3.6",
            "Assists Per Game": "9.3",
            "Steals Per Game": "1.9",
            "Games Played": "979",
            "Championships": "2",
            "MVP Awards": "0",
            "All-Star Selections": "12"
        },
        hint: "Led the 'Bad Boy' Pistons to back-to-back championships. Famous for playing on a severely injured ankle in the 1988 Finals."
    },
    {
        name: "Chris Paul",
        aliases: ["cp3", "chris", "paul", "point god"],
        stats: {
            "Points Per Game": "17.5",
            "Rebounds Per Game": "4.5",
            "Assists Per Game": "9.4",
            "Steals Per Game": "2.1",
            "Games Played": "1,300+",
            "Championships": "0",
            "MVP Awards": "0",
            "All-Star Selections": "12"
        },
        hint: "Known as 'Point God' for his elite playmaking. Led the league in assists and steals multiple times but has never won a championship."
    },
    {
        name: "James Harden",
        aliases: ["harden", "the beard"],
        stats: {
            "Points Per Game": "24.1",
            "Rebounds Per Game": "5.6",
            "Assists Per Game": "7.1",
            "Steals Per Game": "1.5",
            "Games Played": "1,050+",
            "Championships": "0",
            "MVP Awards": "1",
            "Scoring Titles": "3"
        },
        hint: "Famous for his beard and step-back three. Led the league in scoring three times and was traded from OKC before becoming a star."
    },
    {
        name: "Kawhi Leonard",
        aliases: ["kawhi", "leonard", "the klaw", "fun guy"],
        stats: {
            "Points Per Game": "20.0",
            "Rebounds Per Game": "6.4",
            "Assists Per Game": "3.0",
            "Steals Per Game": "1.7",
            "Games Played": "550+",
            "Championships": "2",
            "MVP Awards": "0",
            "Finals MVP": "2"
        },
        hint: "Won Finals MVP with two different teams. Known for his massive hands and said 'I'm a fun guy' in a famous press conference."
    },
    {
        name: "Anthony Davis",
        aliases: ["ad", "anthony", "davis", "the brow"],
        stats: {
            "Points Per Game": "24.0",
            "Rebounds Per Game": "10.4",
            "Assists Per Game": "2.4",
            "Blocks Per Game": "2.3",
            "Games Played": "700+",
            "Championships": "1",
            "MVP Awards": "0",
            "All-Star Selections": "9"
        },
        hint: "Known for his unibrow. #1 overall pick who demanded a trade to LA. Hit the game-winning shot in the 2020 Western Conference Finals."
    },
    {
        name: "Damian Lillard",
        aliases: ["lillard", "dame", "dame time"],
        stats: {
            "Points Per Game": "25.0",
            "Rebounds Per Game": "4.2",
            "Assists Per Game": "6.7",
            "3-Pointers Made": "2,600+",
            "Games Played": "850+",
            "Championships": "0",
            "MVP Awards": "0",
            "All-Star Selections": "8"
        },
        hint: "Famous for clutch playoff shots including a 37-foot series winner. Spent 11 loyal years in Portland and is also a rapper (Dame D.O.L.L.A.)."
    },
    {
        name: "Joel Embiid",
        aliases: ["embiid", "joel", "the process"],
        stats: {
            "Points Per Game": "27.9",
            "Rebounds Per Game": "11.2",
            "Assists Per Game": "3.6",
            "Blocks Per Game": "1.7",
            "Games Played": "450+",
            "Championships": "0",
            "MVP Awards": "1",
            "Scoring Titles": "1"
        },
        hint: "Cameroonian center who embraced 'Trust the Process'. Missed his first two seasons with injuries but became MVP and a scoring champion."
    },
    {
        name: "Luka Doncic",
        aliases: ["luka", "doncic", "luka magic"],
        stats: {
            "Points Per Game": "28.7",
            "Rebounds Per Game": "8.7",
            "Assists Per Game": "8.3",
            "Steals Per Game": "1.1",
            "Games Played": "400+",
            "Championships": "0",
            "MVP Awards": "0",
            "All-Star Selections": "5"
        },
        hint: "Slovenian who won EuroLeague MVP at age 19. Drafted 3rd in 2018 after Dallas traded up with Atlanta."
    },
    {
        name: "Jayson Tatum",
        aliases: ["tatum", "jayson", "jt"],
        stats: {
            "Points Per Game": "23.1",
            "Rebounds Per Game": "7.2",
            "Assists Per Game": "4.0",
            "Steals Per Game": "1.0",
            "Games Played": "500+",
            "Championships": "1",
            "MVP Awards": "0",
            "All-Star Selections": "5"
        },
        hint: "Duke product drafted 3rd overall in 2017. Won a championship in Boston and his son Deuce is famous for his sideline appearances."
    },
    {
        name: "Jimmy Butler",
        aliases: ["butler", "jimmy", "jimmy buckets"],
        stats: {
            "Points Per Game": "18.5",
            "Rebounds Per Game": "5.3",
            "Assists Per Game": "4.1",
            "Steals Per Game": "1.6",
            "Games Played": "750+",
            "Championships": "0",
            "MVP Awards": "0",
            "All-Star Selections": "6"
        },
        hint: "30th overall pick who became a star. Famously practiced with third-stringers to prove a point in Minnesota. Known for playoff intensity."
    }
];
