data_death = [
    {
        title: "Death Saving Throws",
        icon: "heart-beats",
        subtitle: "When HP drops to 0",
        description: "Whenever you start your turn with 0 hit points, you must make a death saving throw, to determine whether you creep closer to death or hang onto life",
        reference: "PHB, pg. 197.",
        bullets: [
            "<b>Roll a d20</b>. If the roll is <b>10 or higher, you succeed. Otherwise, you fail</b>. A success or failure has no effect by itself. On your third success, you become <i>stable</i>. <b>On your third failure, you die</b>. ",
            "The successes and failures don't need to be consecutive; keep track of both until you collect three of a kind.",
            "The number of both is reset to zero when you regain any hit points or become <i>stable</i>.",
            "When you make a death saving throw and <b>roll a 1</b> on the d20, it counts as <b>two failures</b>. If you <b>roll a 20</b> on the d20, you <b>regain 1 hit point</b>.",
            "If you <b>take any damage while you have 0 hit points</b>, you suffer a death saving throw failure. If the damage is from a critical hit, you suffer two failures instead."
        ]
    },
    {
        title: "Stabalize",
        icon: "life-support",
        subtitle: "Halt their death saves",
        description: "If healing is unavailable, a being can be stabilized so that they aren't killed by failed death saving throws",
        reference: "PHB, pgs. 197-198.",
        bullets: [
            "You can <b>use your action</b> to administer first aid to an unconscious being and attempt to stabilize them, which requires a successful <b>DC 10 Medicine check</b>.",
            "A <b>stable</b> being doesn't make death saving throws, even though they have 0 hit points, but they do remain <i>unconscious</i>.",
            "The being stops being stable, and must start making death saving throws again, if they <b>takes any damage</b>. A stable creature that isn't healed regains <b>1 hit point after 1d4 hours</b>.",
            "Most monsters die the instant they drop to 0 hit points, rather than having them fall unconscious and make death saving throws. Mighty villains or special NPCs are common exceptions; the DM might have them fall unconscious and follow the same rules as player characters."
        ]
    },
    {
        title: "Knocking Out",
        icon: "coma",
        subtitle: "Incapacitate a foe",
        description: "Sometimes an attacker wants to incapacitate a foe, rather than deal a killing blow",
        reference: "PHB, pg. 198.",
        bullets: [
            "When an attacker reduces a creature to <b>0 hit points with a melee attack</b>, the attacker can <b>knock the creature out</b>, becoming <i>unconscious</i> and <i>stable</i>. The attacker can make this choice the instant the damage is dealt."
        ]
    },
    {
        title: "Temporary Hit Points",
        icon: "heart-tower",
        subtitle: "Exceed max HP",
        description: "Some spells and special abilities confer temporary hit points to a creature",
        reference: "PHB, pg. 198.",
        bullets: [
            "Temporary hit points aren't actual hit points; they are a <b>buffer against damage</b>, a pool of hit points that protect you from injury. As such, <b>they can exceed your hit point maximum</b>.",
            "When you have temporary hit points and take damage, the <b>temporary hit points are lost first</b>, and any leftover damage carries over to your normal hit points.",
            "<b>Healing can't restore temporary hit points, and they can't be added together</b>. If you have temporary hit points and receive more of them, you decide whether to keep the pool you have or sweap to the new ones.",
            "If you have 0 hit points, receiving temporary hit points <b>doesn't restore you to consciousness or <i>stabilize</i> you</b>. They can still absorb damage directed at you while you're in that state, but only true healing can save you.",
            "Unless a feature that grants you temporary hit points has a duration, they last until they're depleted or you finish a long rest."
        ]
    }
]