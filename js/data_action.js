data_attack = [
    {
        title: "Determine Modifiers",
        icon: "rolling-dices",
        subtitle: "Dis/advantage, bonuses, cover",
        description: "Determine whether the target has cover and whether you have advantage, disadvantage, penalties, or bonuses on Attack Rolls.",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Obstacles can provide <b>cover</b> during combat, making a target more difficult to harm. For further details, see the various cover types under <i>Environmental Effects</i>.",
            "Some conditions give <b>advantage</b> on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
            "Some conditions give <b>disadvantage</b> on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers.",
            "The <b>ability modifier</b> used for a <b>melee weapon attack is Strength</b>, and <b>Dexterity for ranged weapon attacks</b>. If the weapon has the <b>Finesse</b> property, you can swap these modifiers if you wish.",
            "Certain spells allow you to <b>add your spellcasting modifier</b> to your attack roll. These differ between <b>Intelligence, Wisdom, or Charisma</b> depending on your class.",
            "You add your <b>proficiency bonus</b> to your attack roll when you attack using a weapon with which you have proficiency, as well as when you attack with a spell",
            "A class feature, a spell, a particular circumstance, or some other effect might give a <b>bonus or penalty</b> to the check."
        ]
    },
    {
        title: "Attack Roll",
        icon: "dice-twenty",
        subtitle: "Determine if you hit",
        description: "Determine if your attack hits your target, critical hits, or critical misses.",
        reference: "PHB, pg. 194.",
        bullets: [
            "To make an attack roll, <b>roll a d20 and add the appropriate modifiers</b>. If the total of the roll plus modifiers equals or exceeds the <b>target's Armor Class (AC)</b>, the attack hits.",
            "If the d20 roll for an attack is a 20, the attack becomes a <b>critical hit</b>, and thus hits regardless of any modifiers or the target's AC. For further details, see the <i>Damage Roll</i> section.",
            "If the d20 roll for an attack is a 1, the attack becomes a <b>critical miss</b>, and misses regardless of any modifiers or the target's AC."
        ]
    },
    {
        title: "Melee Attacks",
        icon: "crossed-swords",
        subtitle: "Hand-to-hand combat",
        description: "",
        reference: "PHB, pg. 195.",
        bullets: [
            "Most creatures have a 5-foot reach and can thus attack targets within 5 feet of them when making a melee attack.",
            "Certain creatures (typically those larger than Medium) have melee attacks with a greater reach than 5 feet, as noted in their descriptions.",
            "When you are unarmed, you can fight in melee by making a <b>1d4 bludgeoning unarmed strike</b>."
        ]
    },
    {
        title: "Ranged Attacks",
        icon: "pocket-bow",
        subtitle: "Strike from a far",
        description: "",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can make ranged attacks only against targets within a specified <b>range</b>.",
            "If a ranged attack, such as one made with a spell, has a <b>single range</b>, you can't attack a target beyond this range.",
            "Some ranged attacks, such as those made with a longbow or a shortbow, have <b>two ranges</b>. The smaller number is the normal range, and the larger number is the long range. Your attack roll has <b>disadvantage</b> when your target is beyond normal range, and you can't attack a target beyond the long range.",
            "Aiming a ranged attack is more difficult when a foe is next to you. When you make a ranged attack with a weapon, a spell, or some other means, you have <b>disadvantage</b> on the attack roll if you are <b>within 5 feet of a hostile creature</b> who can see you and who isn't incapacitated."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "PHB, pg. 192, 201-205 (for spellcasting rules).",
        bullets: [
            "You can't cast a spell with your action and a different spell with your bonus action in the same turn, <b>except if the action is used to cast a cantrip</b>.",
            "The target of a spell <b>must be within the spell's range</b>. To target something, you must have a <b>clear path to it</b>, so it can't be behind total cover.",
            "Spells with material components <b>do not consume the material unless explicitly stated</b>. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. <b>If you lose concentration, such a spell ends</b>. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a <b>Constitution saving throw</b> to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Cast a long spell",
        icon: "kneeling",
        subtitle: "Cast time of &ge;1 minute",
        description: "Cast a spell with a long casting time",
        reference: "PHB, pgs. 201-202.",
        bullets: [
            "When you cast a spell with a casting time <b>longer than a single action, bonus action, or reaction</b>, you must spend your action each turn casting the spell, and you must <b>maintain your concentration</b> while you do so.",
            "<b>Ritual spells</b> can be cast following the normal rules for spellcasting, or you may take <b>10 minutes longer to cast</b>. The benefit being it <b>doesn't expend a spell slot</b>. However, the ritual version of a spell <b>can't be cast at a higher level</b>. To cast a spell as a ritual, a spellcaster must have a feature that grants the ability to do so and must also have the spell prepared or on their list of spells known (unless the character's ritual feature specifies otherwise).",
            "If your concentration is broken, the spell fails, but you don't expend a spell slot. If you want to try casting the spell again, you must start over."
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features allow extra attacks",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks."
        ]
    },
    {
        title: "Damage Roll",
        icon: "dice-twenty",
        subtitle: "Reduce opponent HP",
        description: "Each weapon, spell, and harmful monster ability specifies the damage it can deal",
        reference: "PHB, pg. 196.",
        bullets: [
            "To deal damage: roll the damage die/dice, add any modifiers, and apply the damage to your target.",
            "Your <b>damage die/dice</b>, and the amount you roll, is listed along with your weapon/spell attack. For <b>critical hits</b>, you get to roll all of the damage dice twice, add them together, then add any relevant modifiers as normal.",
            "When attacking with a <b>melee weapon</b>, you add your <b>Strength modifier</b> to the roll. For <b>ranged weapon</b>, you add your <b>Dexterity modifier</b>. If the weapon has the <b>Finesse</b> property, you can swap these modifiers if you wish.",
            "Certain spells allow you to <b>add your spellcasting modifier</b> to your damage roll. These differ between <b>Intelligence, Wisdom, or Charisma</b> depending on your class.",
            "If a spell or other effect deals damage to more than one target at the same time, roll the damage once for all of them. For example, when a wizard casts fireball or a cleric casts flame strike, the spell's damage is rolled once for all creatures caught in the blast."
        ]
    },
    {
        title: "Damage Types",
        icon: "wrapped-heart",
        subtitle: "Resistance or vulnerability",
        description: "Different attacks, damaging spells, and other harmful effects deal different types of damage",
        reference: "PHB, pg. 196.",
        bullets: [
            "If a creature or an object has <b>resistance</b> to a damage type, damage of that type is halved against it.",
            "If a creature or an object has <b>vulnerability</b> to a damage type, damage of that type is doubled against it.",
            "Resistance and then vulnerability are applied <b>after all other modifiers to damage</b>.",
            "Multiple instances of resistance or vulnerability that affect the same damage type count as only one instance.",
            "<table style='font-size: 75%;'><tr><th style='text-align:left'>Damage Type</th><th></th><th></th><th style='text-align:left'>Typical Origins</th></tr><tr><td>Acid</td><td></td><td></td><td>Corrosive substance of dissolving enzymes, bubbling and dark in color</td></tr><tr><td>Bludgeoning</td><td></td><td></td><td>Blunt force attacks like hammers or impacts like falling constriction</td></tr><tr><td>Cold</td><td></td><td></td><td>Frigid areas deal this over time, but is typical in spells</td></tr><tr><td>Fire</td><td></td><td></td><td>Many spels conjure these raw flames</td></tr><tr><td>Force</td><td></td><td></td><td>Pure magical energy focused into a damaging form</td></tr><tr><td>Lightning</td><td></td><td></td><td>It is rare to be struck by this, but used common in spells</td></tr><tr><td>Necrotic</td><td></td><td></td><td>Magic that withers matter and even the soul</td></tr><tr><td>Piercing</td><td></td><td></td><td>Puncturing and impaling attacks, including spears and monster bites</td></tr><tr><td>Poison</td><td></td><td></td><td>Venomous stings, toxic gas, and damage over time</td></tr><tr><td>Psychic</td><td></td><td></td><td>Direct mental pain or psionic attacks</td></tr><tr><td>Radiant</td><td></td><td></td><td>Holy energy that sears the flesh like fire and overloads the spirit with power</td></tr><tr><td>Slashing</td><td></td><td></td><td>From swords, axes, and even monster claws, it is the most common melee damage</td></tr><tr><td>Thunder</td><td></td><td></td><td>Not to be confused with <i>Lightning</i>, this is a concussive burst of sound</td></tr></table>",
        ]
    }
]

data_action = [
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Special melee attack",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you succeed, you subject the target to the grappled condition (its speed is set to 0)."
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Special melee attack",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you win the contest, you either knock the target prone or push it 5 feet away from you."
        ]
    },
    {
        title: "Disarm",
        icon: "catch",
        subtitle: "Special melee attack",
        description: "Knock a weapon or another item from a target's grasp",
        reference: "DMG, pg. 271.",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to disarm a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The attacker makes an <b>attack roll</b> contested by the target's <b>Athletics or Acrobatics</b> ability check. If the attacker wins the contest, the attack causes no damage or other ill effect, but the defender <b>drops the item</b>.",
            "The attacker has <b>disadvantage on this attack roll</b> if the target is holding the item with <b>two or more hands</b>.",
            "The target has <b>advantage</b> on this ability check if it is larger than the attacking creature, or <b>disadvantage</b> if it is smaller."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration."
        ]
    },
    {
        title: "Climb onto a Bigger Creature",
        icon: "giant",
        subtitle: "Grapple or jump upon",
        description: "When facing a larger creature, some adventurers wish to climb onto their foe",
        reference: "DMG, pg. 271.",
        bullets: [
            "To <b>climb onto a creature</b>, follow the rules of <i>grappling</i>. Since certain creatures can't grapple over a size threshold, they can use <i>long or high jumping</i> and <i>climbing</i> rules instead, treating the creature as <i>difficult terrain</i>.",
            "Once in a grapple or having landed on the large creature, the smaller creature <b>uses its action</b> to make an <b>Athletics or Acrobatics</b> check <b>contested</b> by the target's <b>Dexterity check</b>.",
            "If the smaller creature <b>fails the contest</b>, they <i>fall</i> back to the ground.",
            "If the smaller creature <b>wins the contest</b>, they successfully move into the target creature's space and cling to its body. While in the target's space, the smaller creature <b>moves with the target</b> and has <b>advantage</b> on attack rolls against it. The smaller creature can move around within the larger creature's space, treating the space as <b>difficult terrain</b>.",
            "The larger creature may attack the smaller creature depending on the smaller creature's location and is left to the DM's discretion. The larger creature can dislodge the smaller creature as an action (knocking it off, scraping it against a wall, or grabbing and throwing it) by making an Athletics check contested by the smaller creature's Athletics or Acrobatics check. The smaller creature chooses which ability to use."
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
