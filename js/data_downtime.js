data_rest = [
    {
        title: "Short Rest",
        icon: "pillow",
        subtitle: "A few hours of recovery",
        description: "A period of downtime, at least 1 hour long, during which a character does nothing more strenuous than eating, drinking, reading, and tending to wounds",
        reference: "PHB, pg. 186.",
        bullets: [
            "<b>Spend one or more Hit Dice</b> at the end of a short rest, only up to the character's maximum number of Hit Dice equal to the character's level. So, a level 3 character can only spend upto 3 Hit Dice in a short rest.",
            "For each Hit Die spent in this way, the player <b>rolls the die</b> and adds the character's <b>Constitution modifier</b> to it. The character <b>regains hit points equal to the total</b>.",
            "A character regains some spent Hit Dice upon finishing a <i>long rest</i>."
        ]
    },
    {
        title: "Long Rest",
        icon: "bed",
        subtitle: "A full recovery",
        description: "A period of extended downtime, at least 8 hours long, during which a character sleeps or performs light activity",
        reference: "PHB, pg. 186 (with slight homebrew modifications).",
        bullets: [
            "During the long rest, a character can only <b>sleep, read, talk, eat, or stand watch</b> (for no more than a 2 hour shift).",
            "<b>If the rest is interrupted</b> by a period of strenuous activity (any adventuring activity for longer than an hour), the characters <b>must begin the rest again</b> to gain any benefit from it.",
            "Benefits also cannot be earned if you perform a long rest away from an <i>inn</i> <b>without a bedroll</b>. In harsh weather, like rain/snow/sand, a tent in also required.",
            "At the end of a long rest, a character <b>regains all lost hit points</b>, as well as <b>spent Hit Dice equal to half of their total number</b>.",
            "A character can't benefit from <b>more than one long rest in a 24-hour period</b>, and a character must have <b>at least 1 hit point</b> at the start."
        ]
    },
    {
        title: "Recuperating",
        icon: "foot-plaster",
        subtitle: "Recover injury or illness",
        description: "You can use downtime between adventures to recover from a lingering injury, disease, or poison",
        reference: "PHB, pg. 187 & DMG, pg. 272 (and slightly homebrew edits).",
        bullets: [
            "All lingering injuries can be healed with magic like <i>regenerate</i>. Some injuries can alternatively be healed by <b>resting</b> for multiple days straight.",
            "After every <b>three days</b> of downtime spent recuperating, you can make a <b>DC 15 Constitution saving throw</b>.",
            "On a <b>successful save</b>, you can choose one of the following results:<br />&bull; End one effect on you that prevents you from regaining hit points.<br />&bull; For the next 24 hours, gain advantage on saving throws against one disease or poison currently affecting you.<br />&bull; Roll 1d6 and subtract that number from how many days left you have to recuperate."
        ]
    },
    {
        title: "Sleep at an Inn",
        icon: "block-house",
        subtitle: "Safe from weather and foes",
        description: "Recover Hit Points in the safety of an inn.",
        reference: "(This is a homebrew system.)",
        bullets: [
            "Inns allow players to <b>long rest</b> safe from <b>outdoor threats</b> like animals or monsters, and <b>weather</b> like rain, snow, or sandstorms. They may also allow you to choose a meal type to fufil your <i>hunger</i> at an <b>extra cost</b>.",
            "Inns vary in availability between towns or cities, and each of them is a different quality of experience.",
            "<table><tr><th style='text-align:left;'>Quality</th><th></th><th></th><th style='text-align:left;'>Price/Rest</th><th></th><th></th><th style='text-align:left;'>Meals to Purchase (Extra)</th></tr><tr><td>Meager</td><td></td><td></td><td>7 cp</td><td></td><td></td><td>---</td></tr><tr><td>Ordinary</td><td></td><td></td><td>5 sp</td><td></td><td></td><td>Small (5 cp)</td></tr><tr><td>Hospitable</td><td></td><td></td><td>1 gp</td><td></td><td></td><td>Normal (5 sp), Hearty (1 gp)</td></tr><tr><td>Expensive</td><td></td><td></td><td>2 gp</td><td></td><td></td><td>Hearty (1 gp), Great (5 gp), Banquet (10 gp)</td></tr></table>",
        ]
    }
]

data_downtime = [
    {
        title: "Lifestyle Expenses",
        icon: "cash",
        subtitle: "Determine cost of living",
        description: "Account for the cost of living between long quests and adventures",
        reference: "PHB, pgs. 157-158.",
        bullets: [
            "These cover your <b>accommodations, food and drink, all your other necessities, and the costs of maintaining your equipment</b> so you can be ready when adventure next calls.",
            "Before your next quest, <b>choose a lifestyle from the table below</b>, unless your downtime activity has a predetermined lifestyle expenses and cost. Calculate the cost of your chosen lifestyle by <b>multiplying the price by a period of days</b> determined by the DM.",
            "Your lifestyle might change from one period to the next, based on the funds you have at your disposal, or you might maintain the same lifestyle throughout your character's career.",
            "Your lifestyle choice can have consequences or benefits. Maintaining a wealthy lifestyle might help you make contacts with the rich and powerful, though you run the risk of attracting thieves. Likewise, living frugally might help you avoid criminals, but you can be seen as a peon to the rich.",
            "<table><tr><th style='text-align:left'>Lifestyle</th><th></th><th></th><th style='text-align:left'>Price/Day</th><th></th><th></th><th></th><th></th><th style='text-align:left'>Lifestyle</th><th></th><th></th><th style='text-align:left'>Price/Day</th></tr><tr><td>Wretched</td><td></td><td></td><td>---</td><td></td><td></td><td></td><td></td><td>Comfortable</td><td></td><td></td><td>2 gp</td></tr><tr><td>Squalid</td><td></td><td></td><td>1 sp</td><td></td><td></td><td></td><td></td><td>Wealthy</td><td></td><td></td><td>4 gp</td></tr><tr><td>Poor</td><td></td><td></td><td>2 sp</td><td></td><td></td><td></td><td></td><td>Aristocratic</td><td></td><td></td><td>10 gp minimum</td></tr><tr><td>Modest</td><td></td><td></td><td>1 gp</td><td></td><td></td><td></td><td></td><td colspan='4'><i>Descriptions in PHB, pg. 158.</i></td></tr></table>"
        ]
    },
    {
        title: "Crafting",
        icon: "sword-smithing",
        subtitle: "Proficient in tools",
        description: "You can craft nonmagical objects, including adventuring equipment and works of art",
        reference: "PHB, pg. 187.",
        bullets: [
            "You must be <b>proficient with tools</b> related to the object you are trying to create (typically <i>artisan's tools</i>).",
            "You might also need access to <b>special materials or locations</b> necessary to create it. For example, someone proficient with <i>smith's tools</i> needs a <i>forge</i> in order to craft a sword or suit of armor.",
            "For every day you spend crafting, you make one or more items with a <b>total market value &le;5 gp</b>, and expend raw materials worth half that much.",
            "If something you want to craft has a market value >5 gp, you make progress every day in <b>5 gp increments</b> until you reach the market value of the item. For example, 1,500 gp armor would take 300 days to craft by yourself.",
            "<b>Multiple characters</b> can combine their efforts toward the crafting of a single item, provided that the characters are <b>all in the same place and have proficiency with the requisite tools</b>. Each character contributes 5 gp worth of effort for every day spent helping to craft the item. For example, 1,500 gp armor would take three proficient characters 100 days to create, at a total cost of 750 gp.",
            "While crafting, you can maintain a <b>modest lifestyle</b> without having to pay 1 gp per day, or a <b>comfortable lifestyle</b> at half the normal cost"
        ]
    },
    {
        title: "Practice a Profession",
        icon: "blacksmith",
        subtitle: "Work between adventures",
        description: "Work during your downtime to maintain a better lifestyle, or earn extra funds",
        reference: "PHB, pg. 187 (with slight homebrew modifications).",
        bullets: [
            "Working between adventures allows you to maintain a <b>modest lifestyle</b> without having to pay 1 gp per day. This benefit lasts as long you continue to practice your profession.",
            "If you are a member of an organization that can provide gainful employment, such as a temple or a thieves' guild, you earn enough to support a <b>comfortable lifestyle</b> instead.",
            "If you have <b>proficiency in the Performance skill</b> and put your performance skill to use during your downtime, you earn enough to support a <b>wealthy lifestyle</b> instead.",
            "While working, you can choose instead to take the next lowest lifestyle and keep the funds you'd save for yourself."
        ]
    },
    {
        title: "Researching",
        icon: "conversation",
        subtitle: "Learn about the world/area",
        description: "The time between adventures is a great chance to perform research, gaining insight into mysteries that have unfurled over the course of the campaign",
        reference: "PHB, pg. 187.",
        bullets: [
            "Research can include poring over dusty tomes and crumbling scrolls in a library or buying drinks for the locals to pry rumors and gossip from their lips.",
            "When you begin your research, the DM determines <b>whether the information is available</b>, how many days of downtime it will take to find, and whether there are any restrictions on your research (such as needing to seek out a specific individual, tome, or location).",
            "The DM might also require you to make one or more <b>ability checks</b>, such as an Investigation check to find clues pointing toward the information you seek, or a Persuasion check to secure someone's aid.",
            "Once the above conditions are met, you learn the information if it is available.",
            "For each day of research, you must <b>spend 1 gp</b> to cover your investigation expenses <b>in addition to your normal lifestyle expenses</b>."
        ]
    },
    {
        title: "Training",
        icon: "teacher",
        subtitle: "Study something new",
        description: "Spend time between adventures learning a new language or proficiency with a set of tools",
        reference: "PHB, pg. 187.",
        bullets: [
            "You will need an <b>instructor or mentor</b> willing to use their time to teach you.",
            "The DM determines <b>how long it takes</b>, and whether one or more <b>ability checks</b> are required.",
            "If the set demands above are met, you learn the new language or gain proficiency with the new tool."
        ]
    },
    {
        title: "Additional Activities",
        icon: "question-mark",
        subtitle: "Any activity not on this list",
        description: "Perform a specific activity listed below",
        reference: "DMG, pgs. 127-131.",
        bullets: [
            "The following downtime activities are detailed in the <i>Dungeon Master's Guide</i>: Building a Stronghold, Carousing, Gaining Renown, Crafting a Magic Item, Performing Sacred Rites, Running a Business, Selling Magic Items, and Sowing Rumors."
        ]
    }
]