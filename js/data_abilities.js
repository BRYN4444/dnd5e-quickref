data_abilities_extra = [
    {
        title: "Ability & Skill Checks",
        icon: "dice-twenty",
        subtitle: "If you can do something",
        description: "Ability Checks tests a being's innate talent and training in an effort to overcome a challenge (other than combat), that has a chance of failure",
        reference: "PHB, pgs. 171-179.",
        bullets: [
            "The DM chooses an ability/skill relevant to the action as well as a Difficilty Class (DC) number to roll against. The player then <b>rolls a d20</b> and adds the relevant <b>ability/skill modifier and any bonuses/penalties</b>. If the player's final number is greater than the DC number, than the player's action is successful. Lesser numbers, or ties, result in failure.",
            "The DM might ask for checks in abilities tangentially related to the action, depending on the context. In this case, players may ask that skills that don't relate to the ability, but do relate more directly to the action, are used in assisting the check.",
            "<b>Passive Ability/Skill Checks</b> require no rolls, and are used by the DM to secretly determine successes. They are <b>10 + the modifier required</b>. If the being has advantage, then add 5. Disadvantage, subtract 5."
        ]
    },
    {
        title: "Contests",
        icon: "sword-clash",
        subtitle: "Checks against another person",
        description: "Contests happen when one being's actions are directly opposed to another's",
        reference: "PHB, pg. 174.",
        bullets: [
            "Both participants make appropriate Ability Checks and apply any proper bonuses/penalties. They then compare their totals, and the <b>higher number wins</b>.",
            "A <b>tie</b> results in the situation unchanging. Actions cancel each other out and/or nobody performs their action."
        ]
    },
    {
        title: "Team & Group Checks",
        icon: "backup",
        subtitle: "Multiple people checks",
        description: "Sometimes two or more characters team up to attempt a task",
        reference: "PHB, pg. 175.",
        bullets: [
            "When <b>two or more</b> team up to attempt a task, the one with the highest ability modifier can make an <b>ability check with advantage</b> (reflecting the help).",
            "A character can only provide help if the task is one that can be attempted alone and only when two or more individuals working together would actually be productive.",
            "A number of individuals trying to accomplish something in a <b>group check</b>. Everyone in the group makes the ability check. If <b>at least half the group succeeds, the whole group succeeds</b>. Otherwise, the group fails."
        ]
    },
    {
        title: "Saving Throws",
        icon: "dice-twenty",
        subtitle: "Protecting yourself",
        description: "You don't normally decide to make a saving throw; you are forced to make one because your character or monster is at risk of harm",
        reference: "PHB, pg. 179.",
        bullets: [
            "To make a saving throw, <b>roll a d20</b> and add the appropriate <b>Ability/Skill Modifier</b> listed below.",
            "A saving throw can be modified by a situational bonus or penalty and can be affected by advantage and disadvantage, as determined by the DM.",
            "Each class gives <b>proficiency</b> in at least two saving throws, which lets a character add his or her proficiency bonus to saving throws made using a particular ability score.",
            "The <b>Difficulty Class (DC)</b> for a saving throw is determined by the effect that causes it. For example, the DC for a saving throw allowed by a spell is determined by the caster&#39;s spellcasting ability and proficiency bonus.",
            "The result of a successful or failed saving throw is also detailed in the effect that allows the save. Usually, a successful save means that a creature suffers no harm, or reduced harm, from an effect."
        ]
    },
    {
        title: "Difficulty Class (DC)",
        icon: "checklist",
        subtitle: "How tough a task is",
        description: "The DM chooses one of these numbers that players roll against to gauge difficulty",
        reference: "PHB, pg. 171.",
        bullets: [
            "<table><tr><th>DC</th><th></th><th></th><th style='text-align:left'>Task Difficulty</th></tr><tr><td>5</td><td></td><td></td><td>Very Easy</td></tr><tr><td>10</td><td></td><td></td><td>Easy</td></tr><tr><td>15</td><td></td><td></td><td>Medium</td></tr><tr><td>20</td><td></td><td></td><td>Hard</td></tr><tr><td>25</td><td></td><td></td><td>Very Hard</td></tr><tr><td>30</td><td></td><td></td><td>Nearly Impossible</td></tr></table>"
        ]
    }
]

data_abilities_str = [
    {
        title: "Strength Check",
        icon: "biceps",
        subtitle: "Basic ability check",
        description: "Lifting, pushing, pulling, physically breaking something, forcing your body through a space, or just straight up applying brute force",
        reference: "PHB, pg. 175.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Strength Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Force open a stuck, locked, or barred door",
            "Example: Break free of bonds",
            "Example: Push through a tunnel that is too small",
            "Example: Hang on to a wagon while being dragged behind it",
            "Example: Tip over a statue",
            "Example: Keep a boulder from rolling"
        ]
    },
    {
        title: "Athletics Check",
        icon: "push",
        subtitle: "Skill check",
        description: "Difficult situations you encounter while climbing, jumping, or swimming",
        reference: "PHB, pg. 175.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Athletics Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Attempt to climb a sheer or slippery cliff.",
            "Example: Avoid hazards while scaling a wall, or cling to a surface while something is trying to knock you off.",
            "Example: Try to jump an unusually long distance or pull off a stunt midjump.",
            "Example: Struggle to swim or stay afloat in treacherous currents, storm-tossed waves, or areas of thick seaweed.",
            "Example: Another creature tries to push or pull you underwater."
        ]
    },
    {
        title: "Melee Weapon Bonus",
        icon: "sword-slice",
        subtitle: "Attack & Damage Rolls",
        description: "Strength Modifier gets added to attack and damage rolls with melee weapons",
        reference: "PHB, pg. 176.",
        bullets: [
            "If a melee weapons has the <b>Finesse</b> property, you can choose to have the attack and damage roll pull from <b>Dexterity</b> instead."
        ]
    },
    {
        title: "Lifting & Carrying",
        icon: "weight-lifting-up",
        subtitle: "Your capacity",
        description: "Your Strength score determines the amount of weight you can bear",
        reference: "PHB, pg. 176.",
        bullets: [
            "Your <b>carrying capacity</b> is your <b>Strength score multiplied by 15</b>. This is the weight (in pounds) that you can carry, which is high enough that most characters don&#39;t usually have to worry about it.",
            "You can <b>push, drag, or lift</b> a weight in pounds up to twice your carrying capacity (or <b>30 times your Strength score</b>). While pushing or dragging weight in excess of your carrying capacity, <b>your speed drops to 5 feet</b>."
        ]
    }
]

data_abilities_dex = [
    {
        title: "Dexterity Check",
        icon: "sprint",
        subtitle: "Basic ability check",
        description: "Any attempt to move nimbly, quickly, or quietly, or to keep from falling on tricky footing",
        reference: "PHB, pgs. 176-177.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Dexterity Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Controlling a heavily laden cart on a steep descent.",
            "Example: Steering a chariot around a tight turn.",
            "Example: Picking a lock.",
            "Example: Disabling a trap.",
            "Example: Securely tying up a prisoner.",
            "Example: Wriggling free of bonds.",
            "Example: Playing a stringed instrument.",
            "Example: Crafting a small or detailed object."
        ]
    },
    {
        title: "Acrobatic Check",
        icon: "acrobatic",
        subtitle: "Skill check",
        description: "Attempts to stay on your feet in a tricky situation",
        reference: "PHB, pg. 176.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Acrobatic Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Trying to run across a sheet of ice.",
            "Example: Balancing on a tightrope.",
            "Example: Staying upright on a rocking ship&#39;s deck.",
            "Example: Perform acrobatic stunts, including dives, rolls, somersaults, and flips."
        ]
    },
    {
        title: "Sleight of Hand Check",
        icon: "snatch",
        subtitle: "Skill check",
        description: "Attempt an act of legerdemain or manual trickery",
        reference: "PHB, pg. 177.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Sleight of Hand Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Planting something on someone else.",
            "Example: Concealing an object on your person.",
            "Example: Whether you can lift a coin purse off another person.",
            "Example: Slip something out of another person&#39;s pocket."
        ]
    },
    {
        title: "Stealth Check",
        icon: "hooded-figure",
        subtitle: "Skill check",
        description: "Attempt to conceal yourself from enemies",
        reference: "PHB, pg. 177.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Stealth Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Slink past guards or slip away without being noticed.",
            "Example: Sneak up on someone without being seen or heard."
        ]
    },
    {
        title: "Ranged Weapon Bonus",
        icon: "bowman",
        subtitle: "Attack & damage rolls",
        description: "Dexterity Modifier gets added to attack and damage rolls with ranged weapons",
        reference: "PHB, pg. 176.",
        bullets: [
            "If a melee weapons has the <b>Finesse</b> property, you can choose to have the attack and damage roll pull from <b>Strength</b> instead."
        ]
    },
    {
        title: "Armor Class (AC)",
        icon: "breastplate",
        subtitle: "Your defence",
        description: "Represents how well your character avoids being wounded in battle",
        reference: "PHB, pgs. 14, 144-145.",
        bullets: [
            "Things that contribute to your AC include the armor you wear, the shield you carry, and your Dexterity modifier. Not all characters wear armor or carry shields, however.",
            "Without armor or a shield, your character&#39;s AC equals <b>10 + their Dexterity modifier</b>.",
            "AC while wearing armor or wielding a shield is determined by each type.",
            "Wearing armor your character isn't proficient in results in <b>disadvantage</b> on any ability check, saving throw, or attack roll that involves Strength or Dexterity, and you can&#39;t cast spells."
        ]
    }
]

data_abilities_con = [
    {
        title: "Constitution Check",
        icon: "oppression",
        subtitle: "Basic ability check",
        description: "Any attempt to push beyond normal limits",
        reference: "PHB, pg. 177.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Constitution Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Constitution checks are uncommon, and no skills apply to Constitution checks, because the endurance this ability represents is largely passive rather than involving a specific effort on the part of a character or monster.",
            "Example: Holding your breath.",
            "Example: Marching, or labor, for hours without rest.",
            "Example: Going a long time without sleep.",
            "Example: Surviving without food or water.",
            "Example: Quaff an entire stein of ale in one go."
        ]
    },
    {
        title: "Hit Points",
        icon: "glass-heart",
        subtitle: "Your life force",
        description: "Hit points define how tough your character is in combat and other dangerous situations",
        reference: "PHB, pgs. 12, 177.",
        bullets: [
            "Your starting Hit Points, along with your starting Maximum Hit Points, equal <b>the maximum roll of your class' Hit Dice + your Constitution Modifier</b>.",
            "When you level up, you add one additional Hit Die of the same type to your character sheet, roll it (not spending it), and <b>add that number + your Constitution Modifier</b> to your current Maximum Hit Points.",
            "If your Constitution Modifier increases when you level up, you <b>retroactively add the increase to your past rolls</b>."
        ]
    }
]

data_abilities_int = [
    {
        title: "Intelligence Check",
        icon: "brain",
        subtitle: "Basic ability check",
        description: "Drawing on logic, education, memory, or deductive reasoning",
        reference: "PHB, pgs. 177-178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Intelligence Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Communicating with a creature without using words.",
            "Example: Estimating the value of a precious item.",
            "Example: Pulling together a disguise to pass as a city guard.",
            "Example: Forging a document.",
            "Example: Recalling lore about a craft or trade.",
            "Example: Winning a game of skill."
        ]
    },
    {
        title: "Arcana Check",
        icon: "book-aura",
        subtitle: "Skill check",
        description: "Measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes",
        reference: "PHB, pg. 177.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Arcana Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM."
        ]
    },
    {
        title: "History Check",
        icon: "book-pile",
        subtitle: "Skill check",
        description: "Measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations",
        reference: "PHB, pgs. 177-178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>History Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM."
        ]
    },
    {
        title: "Investigation Check",
        icon: "magnifying-glass",
        subtitle: "Skill check",
        description: "Looking around for clues and making deductions based on those clues",
        reference: "PHB, pg. 178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Investigation Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Deducing the location of a hidden object.",
            "Example: Discern from the appearance of a wound what kind of weapon dealt it.",
            "Example: Determining the weakest point in a tunnel that could cause it to collapse.",
            "Example: Poring through ancient scrolls in search of a hidden fragment of knowledge."
        ]
    },
    {
        title: "Nature Check",
        icon: "ecology",
        subtitle: "Skill check",
        description: "Measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles",
        reference: "PHB, pg. 178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Nature Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM."
        ]
    },
    {
        title: "Religion Check",
        icon: "church",
        subtitle: "Skill check",
        description: "Measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults",
        reference: "PHB, pg. 178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Religion Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM."
        ]
    },
    {
        title: "Spellcasting Ability",
        icon: "magic-swirl",
        subtitle: "Wizards",
        description: "Wizards use Intelligence as their spellcasting ability modifier",
        reference: "PHB, pgs. 178, 205.",
        bullets: [
            "The Difficulty Class (DC) to resist one of your spells equals <b>8 + your spellcasting ability modifier + your proficiency bonus + any special modifiers</b>.",
            "Your attack bonus with a spell attack equals <b>your spellcasting ability modifier + your proficiency bonus</b>."
        ]
    }
]

data_abilities_wis = [
    {
        title: "Wisdom Check",
        icon: "beard",
        subtitle: "Basic ability check",
        description: "Reflect an effort to read body language, understand someone&#39;s feelings, notice things about the environment, or care for an injured person",
        reference: "PHB, pg. 178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Wisdom Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Getting a gut feeling about what course of action to follow.",
            "Example: Discerning whether a seemingly dead or living creature is undead."
        ]
    },
    {
        title: "Animal Handling Check",
        icon: "paw-heart",
        subtitle: "Skill check",
        description: "Measures your ability to deal with the actions and reactions of animals",
        reference: "PHB, pg. 178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Animal Handling Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Calming down a domesticated animal.",
            "Example: Keeping a mount from getting spooked.",
            "Example: Intuit an animal&#39;s intentions.",
            "Example: Control your mount when you attempt a risky maneuver."
        ]
    },
    {
        title: "Insight Check",
        icon: "shadow-follower",
        subtitle: "Skill check",
        description: "Determine the true intentions of a being",
        reference: "PHB, pg. 178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Insight Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Performing an Insight Check involves gleaning clues from body language, speech habits, and changes in mannerisms.",
            "Example: Searching out a lie.",
            "Example: Predicting someone&#39;s next move."
        ]
    },
    {
        title: "Medicine Check",
        icon: "heart-bottle",
        subtitle: "Skill check",
        description: "Measures your knowledge of medicine",
        reference: "PHB, pgs. 178, 197-198.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Medicine Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "A successful <b>DC 10 Medicine check</b> saves a companion from dying and stabilizes them. Their Hit Points stay at 0, but they no longer have to make death saving throws.",
            "Example: Diagnosing an illness.",
            "Example: Determine the proper non-magical treatment for a wound."
        ]
    },
    {
        title: "Perception Check",
        icon: "radar-sweep",
        subtitle: "Skill check",
        description: "Measures your general awareness of your surroundings and the keenness of your senses",
        reference: "PHB, pg. 178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Perception Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Spot, hear, or otherwise detect the presence of something that is obscured or easy to miss",
            "Example: Hear a conversation through a closed door.",
            "Example: Eavesdrop under an open window.",
            "Example: Hear monsters moving stealthily in the forest.",
            "Example: Orcs lying in ambush on a road or thugs hiding in the shadows of an alley.",
            "Example: Spotting candlelight under a closed secret door."
        ]
    },
    {
        title: "Survival Check",
        icon: "treasure-map",
        subtitle: "Skill check",
        description: "Measures your outdoor and wilderness subsistence",
        reference: "PHB, pg. 178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Survival Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Follow tracks and hunting wild game.",
            "Example: Guide your group through frozen wastelands.",
            "Example: Identify signs that owlbears live nearby.",
            "Example: Predict the weather.",
            "Example: Avoid quicksand and other natural hazards."
        ]
    },
    {
        title: "Spellcasting Ability",
        icon: "magic-swirl",
        subtitle: "Clerics, druids, and rangers",
        description: "Clerics, druids, and rangers use Wisdom as their spellcasting ability modifier",
        reference: "PHB, pgs. 178, 205.",
        bullets: [
            "The Difficulty Class (DC) to resist one of your spells equals <b>8 + your spellcasting ability modifier + your proficiency bonus + any special modifiers</b>.",
            "Your attack bonus with a spell attack equals <b>your spellcasting ability modifier + your proficiency bonus</b>."
        ]
    }
]

data_abilities_cha = [
    {
        title: "Charisma Check",
        icon: "public-speaker",
        subtitle: "Basic ability check",
        description: "When you try to influence or entertain others",
        reference: "PHB, pgs. 178-179.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Charisma Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Trying to make an impression or tell a convincing lie.",
            "Example: Navigating a tricky social situation.",
            "Example: Trying to find the best person to talk to for news, rumors, and gossip.",
            "Example: Blend into a crowd to get the sense of key topics of conversation."
        ]
    },
    {
        title: "Deception Check",
        icon: "double-face-mask",
        subtitle: "Skill check",
        description: "Whether you can convincingly hide the truth, either verbally or through your actions",
        reference: "PHB, pg. 178.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Deception Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Misleading others through ambiguity or telling outright lies.",
            "Example: Trying to fast-talk a guard or con a merchant.",
            "Example: Earning money through gambling.",
            "Example: Passing yourself off in a disguise.",
            "Example: Dulling someone&#39;s suspicions with false assurances.",
            "Example: Maintain a straight face while telling a blatant lie."
        ]
    },
    {
        title: "Intimidation Check",
        icon: "convince",
        subtitle: "Skill check",
        description: "When you attempt to influence someone through overt threats, hostile actions, and physical violence",
        reference: "PHB, pg. 179.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Intimidation Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Trying to pry information out of a prisoner.",
            "Example: Convincing street thugs to back down from a confrontation.",
            "Example: Using the edge of a broken bottle to convince a sneering vizier to reconsider a decision."
        ]
    },
    {
        title: "Performance Check",
        icon: "sing",
        subtitle: "Skill check",
        description: "How well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.",
        reference: "PHB, pg. 179.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Performance Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM."
        ]
    },
    {
        title: "Persuasion Check",
        icon: "muscle-up",
        subtitle: "Skill check",
        description: "Influence someone or a group of people with tact, social graces, or good nature",
        reference: "PHB, pg. 179.",
        bullets: [
            "Roll a <b>d20</b> and add your <b>Persuasion Skill Modifier</b> versus a <b>Difficulty Class (DC)</b> set by the DM.",
            "Example: Acting in good faith to foster friendships, make cordial requests, or exhibit proper etiquette.",
            "Example: Convincing a chamberlain to let your party see the king.",
            "Example: Negotiating peace between warring tribes.",
            "Example: Inspiring a crowd of townsfolk."
        ]
    },
    {
        title: "Spellcasting Ability",
        icon: "magic-swirl",
        subtitle: "Bards, paladins, sorcerers, warlocks",
        description: "Bards, paladins, sorcerers, and warlocks use Charisma as their spellcasting ability modifier",
        reference: "PHB, pgs. 179, 205.",
        bullets: [
            "The Difficulty Class (DC) to resist one of your spells equals <b>8 + your spellcasting ability modifier + your proficiency bonus + any special modifiers</b>.",
            "Your attack bonus with a spell attack equals <b>your spellcasting ability modifier + your proficiency bonus</b>."
        ]
    }
]