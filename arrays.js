const players = [
    {
        firstName: "Mathew",
        lastName: "Barzal",
        position: "Center",
        number: 13,
        hiddenDetail: "During his 2017-18 Calder Trophy-winning campaign, he joined an exclusive club by recording three 5-point games in a single season—a feat not accomplished by any NHL rookie since 1918."
    },
    {
        firstName: "Anders",
        lastName: "Lee",
        position: "Center",
        number: 27,
        hiddenDetail: "Before committing to hockey, Lee was a standout high school football star. In 2008, he was named Minnesota's Gatorade Football Player of the Year, throwing for over 2,000 yards and rushing for a staggering 32 touchdowns."
    },
    {
        firstName: "Matthew",
        lastName: "Schaefer",
        position: "Defenseman",
        number: 48,
        hiddenDetail: "He passed Hall of Famer Phil Housley for the most points by an 18-year-old defenseman in NHL history and tied Brian Leetch’s single-season record for most goals by a rookie defenseman."
    },
    {
        firstName: "Ilya",
        lastName: "Sorokin",
        position: "Goalie",
        number: 30,
        hiddenDetail: "He has a knack for racking up shutouts. He even broke a nearly 50-year-old franchise record for career shutouts with the Islanders and posted a massive 44-save shutout against the Devils."
    },
    {
        firstName: "Jean-Gabriel",
        lastName: "Pageau",
        position: "Center",
        number: 44,
        hiddenDetail: "In 2017, Pageau became a legend in Ottawa when he scored four goals in a single playoff game against the New York Rangers, including the game-winner in double overtime, leading to a local restaurant in Ottawa temporarily naming a brunch special in his honor."
    },
    {
        firstName: "Simon",
        lastName: "Holmstrom",
        position: "Right Wing",
        number: 92,
        hiddenDetail: "Before coming to North America, he won a gold medal representing Team Sweden at the 2018 Under-18 World Junior Championships, even scoring a crucial goal in the gold-medal game against Russia."
    },
    {
        firstName: "Anthony",
        lastName: "Duclair",
        position: "Left Wing",
        number: 11,
        hiddenDetail: "Known as a journeyman, he has suited up for nearly a third of the league. His extensive list of franchises includes the Rangers, Coyotes, Blackhawks, Blue Jackets, Senators, Panthers, Sharks, Lightning, and Islanders."
    },
    {
        firstName: "Ryan",
        lastName: "Pulock",
        position: "Defenseman",
        number: 6,
        hiddenDetail: "When he was drafted 15th overall in New Jersey, it was a surreal moment for his family because his father, a lifelong Islanders fan, had actually predicted Ryan would be drafted by New York."
    },
    {
        firstName: "Semyon",
        lastName: "Varlamov",
        position: "Goalie",
        number: 40,
        hiddenDetail: "During his early years in Washington, he and superstar teammate Alex Ovechkin playfully joked about being 'Russian spies' in humorous locker room interviews."
    },
    {
        firstName: "Adam",
        lastName: "Pelech",
        position: "Defenseman",
        number: 3,
        hiddenDetail: "Despite his primary role being defense and suppressing opponent chances, his exceptional two-way play earned him his first career NHL All-Star Game selection in 2022."
    },
    {
        firstName: "Scott",
        lastName: "Mayfield",
        position: "Defenseman",
        number: 24,
        hiddenDetail: "He's known for his grit; it was revealed that Mayfield played through a broken ankle for several months during a grueling playoff push, demonstrating his tough-as-nails reputation."
    },
    {
        firstName: "Ondrej",
        lastName: "Palat",
        position: "Left Wing",
        number: 81,
        hiddenDetail: "Growing up in Frýdek-Místek, Czechoslovakia, he played in leagues two years above his own age group. Facing bigger, stronger players forced him to learn to be 'smarter' and adapt his quick-thinking playing style at a very young age."
    },
        {
        firstName: "Kyle",
        lastName: "Palmieri",
        position: "Center",
        number: 21,
        hiddenDetail: "When he was traded from the Devils to the New York Islanders in April 2021, he essentially had another 'homecoming'. His parents had remained in the New York/New Jersey area and were overjoyed they could watch him play for Long Island."
    },
    {
        firstName: "Alexander",
        lastName: "Romanov",
        position: "Defenseman",
        number: 28,
        hiddenDetail: "Romanov was born into a hockey family in Moscow, Russia. His father, Stanislav Romanov, was a pro player in the Russian Superleague, and his maternal grandfather is legendary Soviet coach and player Zinetula Bilyaletdinov."
    },
    {
        firstName: "David",
        lastName: "Rittich",
        position: "Goalie",
        number: 33,
        hiddenDetail: "Before making his name as a puck-blocker, Rittich was a whistle-blower. Growing up in Czechia, he officiated minor hockey games as a teenager simply as a way to earn spending money."
    },
    {
        firstName: "Casey",
        lastName: "Cizikas",
        position: "Center",
        number: 53,
        hiddenDetail: "He and teammate Anders Lee were both selected by the Islanders in the same 2009 draft class. Cizikas made his NHL debut against the rival New York Rangers just three days before his 21st birthday."
    },
    {
        firstName: "Marc",
        lastName: "Gatcomb",
        position: "Center",
        number: 16,
        hiddenDetail: "Before focusing completely on hockey, Gatcomb was a standout baseball player in high school at The Frederick Gunn School in Connecticut."
    },
    {
        firstName: "Emil",
        lastName: "Heineman",
        position: "Left Wing",
        number: 51,
        hiddenDetail: "The name 'Emil' comes from the Latin word aemulari, meaning 'trying to equal or surpass.' This fits perfectly with his gritty playing style and his history of working his way up through Sweden's ranks."
    },
    {
        firstName: "Kyle",
        lastName: "MacLean",
        position: "Center",
        number: 32,
        hiddenDetail: "Kyle and his dad, John, made NHL history by becoming the first father-son duo to each score in their Stanley Cup Playoff debuts."
    },
    {
        firstName: "Brayden",
        lastName: "Schenn",
        position: "Center",
        number: 10,
        hiddenDetail: "In addition to his NHL success, he has represented Team Canada multiple times, winning gold medals at the 2008 Under-18 World Championships, the 2008 Ivan Hlinka Memorial Cup, and the 2015 IIHF World Championship."
    },
    {
        firstName: "Adam",
        lastName: "Boqvist",
        position: "Defenseman",
        number: 34,
        hiddenDetail: "Hockey runs in the family. His older brother, Jesper Boqvist, is also an NHL forward. The two brothers even shared an apartment together when they were trying to break into the NHL and played as teammates for the Florida Panthers during the 2024–25 season."
    },
    {
        firstName: "Tony",
        lastName: "DeAngelo",
        position: "Defenseman",
        number: 77,
        hiddenDetail: "He is incredibly close to his grandparents. His grandfather Lou was instrumental in his early hockey development, driving him to endless practices and games throughout southern New Jersey."
    },
    {
        firstName: "Carson",
        lastName: "Soucy",
        position: "Defenseman",
        number: 4,
        hiddenDetail: "Just before being drafted by the NHL, Soucy played outfield for the Canadian Junior Men's National Softball Team, helping them finish fourth at the 2012 ISF World Championships in Argentina."
    },
    {
        firstName: "Noah",
        lastName: "Dobson",
        position: "Defenseman",
        number: 39,
        hiddenDetail: "The 6-foot-4 blueliner, born in Summerside, Prince Edward Island, famously wears No. 53 to honor his late grandfather."
    }
];

const retiredPlayers = [
    {
        firstName: "Denis",
        lastName: "Potvin",
        position: "Defenseman",
        number: 5,
        hiddenDetail: "He was the first defenseman in NHL history to win the Hart Trophy as league MVP, which he earned in 1976. He also won the Norris Trophy as the league's best defenseman three times during his career."
    },
    {
        firstName: "Bryan",
        lastName: "Trottier",
        position: "Center",
        number: 19,
        hiddenDetail: "He was born in Val Marie, Saskatchewan, a small town with a population of just a few hundred people. Despite his humble beginnings, Trottier went on to become one of the greatest players in NHL history."
    },
    {
        firstName: "Clark",
        lastName: "Gillies",
        position: "Right Wing",
        number: 9,
        hiddenDetail: "Gillies was known for his powerful shot and his ability to play both sides of the ice. He was a key player for the Montreal Canadiens during the 1970s and 1980s."
    },
    {
        firstName: "Mike",
        lastName: "Bossy",
        position: "Right Wing",
        number: 22,
        hiddenDetail: "Bossy was one of the most prolific goal scorers in NHL history. He scored 50 or more goals in each of his first nine seasons, a feat that has never been matched."
    },
    {
        firstName: "Bobby",
        lastName: "Nystrom",
        position: "Right Wing",
        number: 23,
        hiddenDetail: "Nystrom is best known for scoring the Stanley Cup-winning goal in overtime of Game 6 against the Vancouver Canucks in 1980, securing the Islanders' first-ever championship."
    },
    {
        firstName: "John",
        lastName: "Tonelli",
        position: "Left Wing",
        number: 27,
        hiddenDetail: "Tonelli was known for his versatility and leadership. He played a key role in the Islanders' four consecutive Stanley Cup victories from 1980 to 1983 and was named an NHL All-Star three times during his career."
    },
    {
        firstName: "Billy",
        lastName: "Smith",
        position: "Goalie",
        number: 31,
        hiddenDetail: "Smith was known for his fiery personality and his acrobatic saves. He won the Vezina Trophy as the league's best goalie in 1983 and was named to the NHL All-Star team five times during his career."
    },
    {
        firstName: "Butch",
        lastName: "Goring",
        position: "Center",
        number: 91,
        hiddenDetail: "Goring was a key player for the Islanders during their dynasty years. He was known for his speed and his ability to score clutch goals, and he won four Stanley Cups with the team."
    }
];