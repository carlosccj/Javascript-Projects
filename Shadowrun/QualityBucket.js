import Quality from './Quality.js'

class QualityBucket {
    constructor() {
        this._numberOfQualities = 64
        this._arrayOfQualities = this.createNewArrayOfQualities()
    }

    get numberOfQualities() {
        return this._numberOfQualities
    }

    get arrayOfQualities() {
        return this._arrayOfQualities
    }
    
    createNewArrayOfQualities() {
        let result = []

        // Positive Qualities
        result.push(new Quality("Ambidextrous", 
        "You are equally adept at using either your right or left side. Whether shooting a gun, throwing agrenade, or kicking a ball, you can switch it upwith the best of them.",
        4, 1, "No penalty for off-hand weapon use (see p. 110)."))
        result.push(new Quality("Analytical Mind", 
        "You are a master problem solver. You can analyze information to help deduce solutions, while separating useful bits from the distractions and noise.",
        3, 1, "You gain a bonus Edge when you make any Logic-based test."))
        result.push(new Quality("Aptitude (Skill)", 
        "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
        12, 1, "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6."))
        result.push(new Quality("Astral Chamaleon", 
        "Your aura never seems to stabilize for very long. You have the ability to blend in with the astral environment around you and make it harder to identify and read your aura and astral signature.", 
        9, 1, "Characters receive -2 dice on tests to recognize your aura or astral signature. Your astral signature fades in half the normal time (see p. 159)."))
        result.push(new Quality("Blandness", 
        "You are the least interesting person in the world. You're average height, average weight, average build, average everything. Nothing at all about you tends to stand out, and that can be extremely useful.", 
        8, 1, "Characters take a -2 penalty on Memory tests (p. 67) to remember if they have seen you before, and the threshold on tests to notice if you are following or observing them is increased by 1. If the character acquires something permanent and distinctive (obvious, unusual cyberware, a unique tattoo, that sort of thing) they lose this quality. If they acquire something temporarily distinctive, such as an extreme hairdo, the effects are negated until those changes are reversed."))
        result.push(new Quality("Built Tough (1 to 4)", 
        "You're built like a brick drekhouse. You're pretty good at taking a few extra hits before the lights go out.", 
        4, 4, "You have a number of additional boxes on your Physical Condition Monitor equal to the rank of this quality."))
        result.push(new Quality("Catlike", 
        "You have an innate grace usually seen only in the genus Felis that translates into smooth movements and a propensity for always landing on your feet—literally, if not figuratively.",
        12, 1, "You gain a bonus Edge on all tests for balance, falling, and landing safely. Note the rules in the Preventing Edge Abuse section, p. 45."))
        result.push(new Quality("Dermal Deposits", 
        "You have calciferous deposits growing on or through your flesh, making you tougher and a little rough around the edges. Literally.", 
        7, 1, "You gain 1 level of natural Armor. Your Unarmed Melee attacks inflict Physical damage."))
        result.push(new Quality("Double-Jointed", 
        "Through practice or genetics, you've managed to make most of the joints in your body bend beyond normal metahuman ranges. Your hands narrow to as small as your wrists, your shoulders rotate and bend in every direction, your body folds neatly in half both forward and backward, and you can rotate your head to look behind you without turning your shoulders, just to name a few of your neatest party tricks.", 
        12, 1, "You gain a bonus Edge on all tests involving grappling, escaping bonds, flexibility, or fitting into tight spaces. Note the rules on Preventing Edge Abuse, p. 45."))
        result.push(new Quality("(Elemental) Resistance", 
        "Through genetics or training, you have developed a powerful resistance and tolerance for certain forms of damaging energy (or lack of energy, in the case of cold).", 
        12, 1, "When choosing this quality, select an elemental form of damage (p. 109). When attacked with a weapon or spell (including unarmed combat by a spirit) that does this form of damage, gain a point of Edge before making your Defense test."))
        result.push(new Quality("Exceptional (Attribute)", 
        "Whether it's being a powerhouse, taking a hit from a troll, holding your synthahol, ducking a fast right, holding that inside turn, selling coal in Newcastle, or making a cat look clumsy, you'rejust naturally built to be better.", 
        12, 8, "Select a Physical or Mental attribute. That attribute's maximum (but not current) rank increases by 1. This quality can only be purchased once per attribute."))
        result.push(new Quality("First Impression", 
        "You know how to make an entrance and make that first meeting the best meeting. Your wit, charm, and subtle flattery put everyone you meet off their guard and let you make the most of a first encounter.", 
        12, 1, "You gain 2 Edge for Social Tests during your first meeting with anyone, and both your Heat and Reputation are ignored for this first encounter."))
        result.push(new Quality("Focused Concentration (1 to 3)", 
        "You know how to compartmentalize your mind and keep hold of arcane and emergent manipulations without straining yourself.", 
        12, 3, "You can sustain multiple spells or complex forms without penalty. For each level, you can sustain 1 additional spell or complex form without suffering the associated penalty. The spell cannot have a modified Drain Value of 7 or greater."))
        result.push(new Quality("Gearhead", 
        "If it's meant to move but currently isn't moving so well, you know how to get it back into tip-top shape in a jiffy.", 
        10, 1, "You gain an Edge on Repair tests for any vehicle and can spend Edge during downtime to make Extended Repair tests."))
        result.push(new Quality("Guts", 
        "It's not a lack of fear, just a lack of cowardice! You can stand up to the most intimidating opponents and hold your tongue under the toughest interrogations.", 
        12, 1, "You gain an Edge when resisting Intimidation or effects that cause the Frightened status."))
        result.push(new Quality("Hardening", 
        "Get clipped by IC and other personas enough times in the Matrix, and you can start to build defenses against it. Your physical form actually helps absorb some of the injuries coming at your Matrix persona.", 
        10, 1, "You gain a bonus Edge when making Matrix Damage Resistance tests. If you do not use that point of Edge immediately on the Damage Resistance test, it goes away. When struck by any damage in the Matrix, you can convert up to two boxes to Stun Damage, rather than Matrix damage, protecting your persona at the cost of yourself."))
        result.push(new Quality("High Pain Tolerance", 
        "Pain is but an illusion of the mind. Either that, or you were born with congenital analgesia. Either way, you don't suffer the ill effects of injury and pain like others.", 
        7, 1, "When wounded, reduce your wound penalty by one (to a minimum of 0)."))
        result.push(new Quality("Home Ground", 
        "Spend enough time somewhere, and you get to know it like the back of your hand. In the local neighborhood, you know every turn, every back alley, every shop on the block, the local rivalries and romances, and you can use all of it to your advantage. In the Matrix, you've spent countless hours in the code, you know its gremlins, its quirks, the local avatars, and the ones that are out of place.", 
        10, 1, "Select a neighborhood or Matrix host each time you take this quality. Outdoors and Perception tests made in your Home Ground gain an Edge for use on that test; if you do not use the Edge on that test, it goes away."))
        result.push(new Quality("Human-Looking", 
        "Small orks, tall dwarfs, and ugly elves do exist. Whether through genetics or modifications, you do not look like your birth metatype; you appear human. The points in your ears are easily overlooked, your tusks are filed down to mere teeth, your cheekbones are rounder, your legs longerthat sort of thing. You can pass for human, which might help with humans or cause obstacles with non-humans.", 
        8, 1, "You generally appear human at first glance and gain +2 dice on Disguise testscto hide your metatype and appear more human."))
        result.push(new Quality("Indomitable", 
        "Whether through deep studies, natural selection, or intense training, your mind is hard to break. You can hold out longer under interrogation, shrug off mild injuries with ease, and hold your mind against the onslaught of incoming mana.", 
        12, 1, "Edge Boost costs are reduced by 1 on tests involving Willpower."))
        result.push(new Quality("Juryrigger", 
        "When you don't have the time or the parts to do it right, you can still get it done. Whether it's slapping on duct tape, twisting together wires that maybe shouldn't be connected, or just giving the thing a swift kick, you find a creative way to get a machine working, even if only briefly.", 
        12, 1, "When performing a Juryrigging test (see p. 95), you gain a point of Edge that must be spent on that test, or it goes away."))
        result.push(new Quality("Long Reach", 
        "Whether it's because of long arms, long legs, or some exceptional physical grace, you are able to reach people with melee weapons easier than others.", 
        12, 1, "When you are using a melee weapon, Close range is extended to 5 meters instead of 3."))
        result.push(new Quality("Low-Light Vision", 
        "Thanks to an increase in the number of rod cells in your natural eyes, an implanted increase of said rod cells, or an augmentation that enhances the light level of incoming data, you are capable of operating in light levels that would leave others essentially blind.", 
        6, 1, "You gain a bonus Edge for use on any Magic Resistance test; if you do not use it on that test, that point goes away. When a Health spell is cast on you, treat your Essence as if it were 2 points lower than it actually is."))
        result.push(new Quality("Magic Resistance", 
        "You could have been born under a blood moon, filled your body with foreign substances, or had bits of your soul sucked out by a spirit or vampire. For good or ill, mana just doesn't seem to want to connect with you. Whether it's a manabolt trying to melt your brain, a fireball trying to cook you alive, or a healing spell trying to mend your wounds, it's just harder to get magic to work on you.", 
        8, 1, "You gain a bonus Edge for use on any Magic Resistance test; if you do not use it on that test, that point goes away. When a Health spell is cast on you, treat your Essence as if it were 2 points lower than it actually is."))
        result.push(new Quality("Mentor Spirit", 
        "You believe in something other than yourself to help guide and channel your magic, and that something believes in you. Whether it be the totem of Wolf, the Norse god Loki, or the Christian God, you utilize your beliefs to shape and focus your arcane abilities more easily.", 
        10, 1, "You gain the benefits listed with the description of your mentor spirit (see p.162). If you fail to keep aligned with one of those tenets, you lose your faith and connection to your mentor and all associated bonuses."))
        result.push(new Quality("Photographic Memory", 
        "Most people store life in clips, but you keep the recording running all the time. It's a ton of information to deal with at times, but it has made you great for trivia night and remembering the favorite color of your childhood friend.", 
        12, 1, "You gain a bonus Edge point when making a Memory test (p. 67). If you do not use this point of Edge on the test, it goes away."))
        result.push(new Quality("Quick Healer", 
        "You tend to heal from injury quicker than your peers, which is incredibly valuable in a profession that is all about putting your body on the line.", 
        8, 1, "Cut the interval for any natural healing test (p. 120) in half, meaning you can heal Stun Damage after half an hour and Physical Damage after half a day."))
        result.push(new Quality("Resistance to Pathogens", 
        "When you claim, “I've never been sick a day in my life,” there's a good chance it may be true. You have a very healthy immune system that has mastered the art of fighting off any and all comers that try to slip into your body and make you sick.", 
        12, 1, "You gain a bonus point of Edge when you make a Pathogen Resistance test. If you do not use it on that test, it goes away."))
        result.push(new Quality("Spirit/Sprite Affinity (Select Classification)", 
        "You have earned respect among a particular group of spirits/sprites. Through actions and favors, you've gained a positive reputation that makes them treat you with extra consideration.", 
        14, 20, "When selecting this quality, choose a type of spirit or sprite. You gain a bonus point of Edge when making a Conjuring or Tasking test for your chosen class of spirits/sprites. This quality can be taken multiple times, selecting a new class of spirits/sprites each time."))
        result.push(new Quality("Thremographic Vision", 
        "Thanks to enhancements or just genetics, your vision allows you to see differences in temperature on and around objects and people, though most of the time ambient regular light overrides the heat signature. Large local sources of heat can create a glare of sorts, but usually something giving off that much heat is also giving off light, so your regular vision takes over.", 
        8, 1, "You can see the heat of objects in total darkness (assuming they are warmer or colder than the ambient temperature), allowing you to operate in such conditions."))
        result.push(new Quality("Toughness", 
        "Whether it's mental training, a physical regimen of self-inflicted injury, or you're just one tough bastard, you can take a bit more of a beating and shrug off the injuries better than most.", 
        12, 1, "You gain a bonus point of Edge when making Damage Resistance tests. If you do not use it on the test, it goes away."))
        result.push(new Quality("Toxin Resistance", 
        "Whether through naturally superior organs or because you think getting bit by a snake on a daily basis is a fun way to pass the time, you're able to better resist the effects of toxins in the Sixth World.", 
        12, 1, "You gain a bonus point of Edge when you make a Toxin Resistance test (p. 121). If you do not use it on that test, it goes away."))
        result.push(new Quality("Will to Live (1 to 3)", 
        "No matter how hard the hit, you have the tenacity to hold on to the bitter end. You are quite capable of taking a .50-cal round to the chest and waking up in the hospital, rather than never waking up at all.", 
        8, 3, "For every rank of this quality you possess, you gain two additional Damage Overflow boxes (see p. 121)."))
        
        // Negative Qualities
        result.push(new Quality("Addiction (Substance, 1 to 6)", 
        "Some habits just can't be kicked. It might be as simple as a need for a drag off that nic-stick to cool your nerves, or as life-twisting as a need for something better-than-life, but whatever it is, it's got a firm grip on you.", 
        -2, 6, "You cannot earn Edge or spend Edge in any form while suffering withdrawal. Withdrawal times (the time that passes before you need your next hit) and requirements are based on the level of addiction and can be found on the Addiction Withdrawal table. When in withdrawal, take a -2 dicepool penalty on all tests; increase that penalty by 1 each time you pass another Withdrawal time period."))
        // ---------- Needs workaround for Karma problem ----------
        result.push(new Quality("Allergy (Substance, Severity)", 
        "Maybe it's a runny nose and poorly timed sneezes from pollen, or a full-blown anaphylactic reaction from some of those rare natural peanuts. Whatever it is, you suffer some level of discomfort from a substance found in the Sixth World.", 
        -20, 6, "Select an allergen and severity to determine Karma value. You cannot spend or earn Edge while exposed to your allergen. You also suffer secondary effects, which are listed below. • Mild: You experience a -2 dice pool modifier to any test involving a Physical attribute while the allergen is affecting you. • Moderate: You experience a -4 dice pool modifier to any test involving a Physical attribute while the allergen is affecting you. • Severe: You experience a -4 dice pool modifier to any test involving a Physical attribute while the allergen is affecting you. You also suffer 1 box of unresisted Physical Damage for every minute you are exposed to the allergen. • Extreme: You experience a -6 dice pool modifier to all actions and suffer 1 box of unresisted Physical Damage for every 30 seconds you are exposed to the allergen."))
        // ---------- Needs workaround for Karma problem ----------
        result.push(new Quality("AR Vertigo", 
        "Whether it's just too much information, a focal issue in your visual field, or just an inability to focus when there's so much to look at, you get dizzy and nauseated when utilizing AR.", 
        -10, 1, "You cannot gain or spend Edge while utilizing AR of any sort. You also gain the Nauseated status (p. 52) while using AR and for one hour after you exit it."))
        result.push(new Quality("Astral Beacon", 
        "Whenever people talk about someone having a “bright soul,” they make it sound like a good thing. You know it's not. Your bright aura makes you stick out like a sore thumb on the astral. You have a hard time hiding or masking your aura, you can't hide your feelings worth a damn, and attempts to locate you magically can be managed by first-year dropouts from Hagerstown Community College's Arcane Studies program.", 
        -10, 1, "You are considered Untrained for all Stealth tests in the astral plane. You can never take the masking metamagic. Assensing tests made against you get a free Edge, and all thresholds are reduced by 1. Astral Tracking tests made against you gain 2 Edge, and all thresholds are reduced by half."))
        result.push(new Quality("Bad Luck", 
        "You were born under a bad sign, broke a mirror, spilled some salt, got the evil eye laid on you, or just can't catch a break. No matter the reason, things just go wrong around you. Often.", 
        -10, 1, "Glitches occur more frequently. Count dice showing both 1 and 2 for determining a glitch. This does not affect critical glitches, only regular glitches."))
        result.push(new Quality("Bad Rep", 
        "Word on the street does not speak favorably of you. Maybe you lost a team or got kicked from a team for breaking during interrogation. Whatever it is, your reputation precedes you, and never in the way you want it to.", 
        -8, 1, "You cannot spend Edge on Social tests. If you engage in a Teamwork test to assist a Social test, no one can spend Edge, and the opposing individual gains a point of Edge."))
        result.push(new Quality("Combat Paralysis", 
        "No matter how many times the street sam takes you to the range, you just can't help but jump and freeze that first time they start shooting. Sure, you recover, but you always feel a half step behind in the fight.", 
        -8, 1, "Your Initiative Score is divided in half at the start of combat. You cannot take a Move or Sprint action in the first round, and you act last in that round. Your movement is restored to normal after the first round, but your Initiative Score is unchanged."))
        result.push(new Quality("Dependents (1 to 3)", 
        "Children, lovers, or something other, you have people relying on you for financial support. They live in your doss, eat your food, use your trid account, and generally cost you enough nuyen to keep you looking for that next score.",
        -4, 3, "Choose a level for the dependents. Level 1 dependents are the equivalent of a family member who does not live with you but still needs support. Five percent of any score goes to this person. Level 2 dependents are more stable costs, like the support of a high-maintenance significant other, a child, or a small family. This level costs the runner 10 percent of every score. Level 3 dependents are rare in the shadows, because most runners don't have a regular family and a second life outside the shadows, which is what this level entails. This level costs the runner 25 percent of all their scores. For purposes of this quality, a “score” is any income that comes their way. Job payments, fencing stolen goods or paydata, or even gambling winnings. The people important to you prosper when you do!"))
        result.push(new Quality("Distinctive Style", "You only fit in when you're in places where no one fits in. The way you dress and look are unique to you. This isn't just a pink mohawk or a signature black trenchcoat. This is a two-meter-tall SURGEd lizard with a rainbow head frill, a head full of piercings including a bullring in his snout, dressed in full punk regalia. This is an albino ork who wears white sunglasses and a white trench coat over a head-to-toe white suit. A distinctive style is more than just what you choose to put on each day—it's a way of life.", 
        -6, 1, "You cannot gain or spend Edge when you're not rocking your distinctive look. Others get a +2 dice pool bonus when conducting a Memory test (p. 67) to recall your appearance or remember if they have seen you before."))
        result.push(new Quality("Elf Poser", 
        "Your blood may be human or ork, but your ears, cheekbones, and hoity-toity attitude are all elf. A surgery here and there, maybe a Sperethiel class on the Matrix, and a lot of time watching footage of the Tír princes has you all set to join those you feel you truly belong with, no matter how round your ears or broad your tusks were at birth.", 
        -6, 1, "Elves, orks, and trolls gain a point of Edge in Influence (Etiquette) tests made against you."))
        // ---------- Needs workaround for Level problem ----------
        result.push(new Quality("Glass Jaw", 
        "Doesn't take much to lay you on your hoop. You just never could take a punch.", 
        -4, 10, "You have 1 less Stun Box for each level of this Quality, down to a minimum of 2."))
        // ---------- Needs workaround for Level problem ----------
        result.push(new Quality("Gremlins", 
        "Commlinks freeze, guns jam, car tires blow, electrical systems short. Any and every thing that could go wrong with some fidgety bit of tech in your hands has gone wrong at one point in your life.", 
        -6, 1, "Whenever you use any device, roll 2D6. If you get a 1 on either die, it means the device fails to function correctly and can be treated as a glitch. The device can be quickly reset with a Minor Action and used again. Rolling snake eyes (double 1s) means the device fails catastrophically, and the roll can be treated like a critical glitch. The device is done for good and you might be in for a bit of hurt from shock or biofeedback."))
        result.push(new Quality("Honorbound", 
        "You have a code. You live by the code. You die by the code. There are many codes, each with a set of tenets that must be obeyed to maintain the balance in your soul, heart, qi, brain chemistry, etc.", 
        -10, 1, "You cannot spend or earn Edge for twenty-four hours after you break a tenet of your code. If the same tenet is broken multiple times or broken again during the twenty-four hour period, each infraction adds another forty-eight hours onto the initial twenty-four. If a different tenet is broken, it's twenty-four hours for that one added to any current infractions, and the same rules apply for additional violations. See the Honorbound sidebar for some sample codes and tenets."))
        result.push(new Quality("Impaired (Attribute)", 
        "Some folks are just not meant to be naturally talented. A bum knee, poor genetics, or an illness as a kid has you lacking the maximum achievement level of your peers.", 
        -8, 8, "For each level, the character's maximum for the chosen attribute decreases by 1, to a minimum of 2."))
        result.push(new Quality("Incompetent (Skill)", 
        "No matter how much you practice and try to figure it out, there are some skills you just can't manage to get right.", 
        -10, 1, "When this quality is chosen, select a skill. You are unable to gain ranks in the selected skill. You cannot be Incompetent in skills you have no chance to perform so you cannot choose this quality for Magic skills if you do not have a Magic rating, and you cannot choose it for Tasking if you do not have a Resonance rating. This skill may only be selected once."))
        result.push(new Quality("In Debt", 
        "Sometimes to get cash you need to owe cash. You've built up a bit of debt trying to get a foothold in the shadows.", 
        0, 1, "When you spend Karma for cash, every point of Karma you spend gets you 5,000 instead of 2,000 nuyen. Each point of Karma spent also puts you 5,000 nuyen into debt with someone very dangerous and capable of collecting. You must pay a monthly interest rate of 500 nuyen per Karma spent, in addition to any payment to the principal. If the interest is not paid, the lenders come searching for you. The quality can be bought off purely with money; if the principal is repaid the quality is eliminated. This quality can be obtained only during character creation, not during gameplay."))
        result.push(new Quality("Insomnia", 
        "Sleep? What's that? It could be nightmares, brain damage, funky biochemistry, or a psychological disorder, but no matter the reason, you just can't get a good night's rest.", 
        -4, 1, "Without proper rest, you can't regain Edge or spend it as you might like. Each day the runner must make a Body + Willpower (3) test to get a successful night of rest. If they fail, they cannot earn more than two Edge from any source that day. Also, they cannot spend more than 2 Edge on any given test. The purchase and use of a sleep regulator reduces the threshold on the test to 1. The runner can also purchase medication (50 nuyen/dose) that reduces the threshold to 2.", ))
        result.push(new Quality("Loss of Confidence", 
        "Imposter syndrome, a single traumatic failure, or just too many rejections or small failures in life have left you doubting yourself at every turn.", 
        -6, 1, "During any encounter, the runner must make a Willpower (2) test as a Minor Action. Failure means they cannot earn or spend Edge for the entire encounter."))
        result.push(new Quality("Low Pain Tolerance", "You've got sensitive nerves or a generally sensitive nature. For whatever reason, you are more affected by injuries and discomfort.", 
        -10, 1, "All wound modifiers are doubled."))
        result.push(new Quality("Ork Poser", 
        "Your blood may be human or elf, but your ears, jaw, tusks, and rough attitude are all ork. A surgery here and there, maybe an Or'zet class on the Matrix, and a lot of time watching documentaries on the Seattle Underground has you all set to join those you feel you truly belong with, no matter how round your ears or thin your frame was at birth.", 
        -6, 1, "Elves, orks, and trolls gain a point of Edge in Influence (Etiquette) tests made against you."))
        result.push(new Quality("Prejudiced (Group)", "You have some deep-seated views and beliefs about a certain group, and no matter what anyone says, you know they're no good. Your opinion of them is so negative and distracting you just can't keep focused on other things while they're around.", 
        -8, 1, "Select a specific group or type of people. You are unable to gain or use Edge while the object of your prejudice is present (unless you're directly opposing them)."))
        result.push(new Quality("Scorched", 
        "A Matrix, simsense, or BTL experience has fried your neurons to the point of perpetual frazzle, causing trouble when you're logged on, even when it's just AR.", 
        -6, 1, "You cannot spend Edge while accessing the Matrix. This includes through use of commlinks, smartlinks, and any other source of data coming in from the ether."))
        result.push(new Quality("Sensitive System", 
        "It could be latent unexpressed arcane talent or just a hyperactive immune system, but the result is the same. Your body does not like to have anything grafted or merged with it that isn't part of its natural code.", 
        -8, 1, "Essence costs are doubled for all cyberware, bioware, and nanoware. Geneware suffers no ill effects. You cannot have this quality if you have a Magic or Resonance rating. (Note that nanoware and geneware will be covered in future books.)"))
        result.push(new Quality("Simsense Vertigo", 
        "Somewhere inside your brain, you've got some wires crossed. Whenever you log onto the Matrix in VR, your disorientation is nauseating.", 
        -6, 1, "You cannot gain or spend Edge while accessing the Matrix via VR. You also receive the Nauseated status (p. 52) for one hour after you log off the Matrix."))
        result.push(new Quality("Sinner", 
        "Unlike a lot of runners, who have either no SIN or a criminal SIN, you have a legitimate SIN that links back to biometric data. You have enough attachment to it, whether for your own or family purposes, that you can't just burn it.", 
        -8, 1, "You pay taxes to the issuer of your SIN, either a megacorporation or a nation. This cost comes as a 10 percent increase in the cost of the lifestyle associated with this SIN. Due to data within the Global SIN Registry, you are easier to track or identify, giving opponents a point of Edge every time they attempt a Trace Icon action against you."))
        result.push(new Quality("Social Stress", 
        "There is a social situation that simply does not work for you, like being in large groups, talking to new people, being the center of attention, being out of the spotlight, or a myriad of other situations that some folks find totally normal but you find ridiculously stressful.", 
        -8, 1, "Select a specific social stressor. When encountering your social stressor, you must make a Charisma (2) test as a Minor Action. Failure means you cannot earn or spend Edge until you succeed. You can choose not to take the test but if so, any tests made against you gain a bonus Edge."))
        result.push(new Quality("Spirit/Sprite Bane", 
        "You may have angered them with how you treat their fellows, killed a powerful and respected member of their kind, or been born under a bad sign and marked as an enemy to entities like them. The reason doesn't matter—what matters is the fact that a certain type of spirit/sprite has an inherent dislike for you.", 
        -12, 11, "When selecting this quality, choose a type of spirit or sprite. Spirits/sprites from that category gain a bonus point of Edge when you attempt a Conjuring or Tasking test against them. This quality can be taken multiple times, selecting a new class of spirits/sprites each time. In combat, spirits/sprites of the chosen type will attack you first and relentlessly, often to the point of savaging a dead body or bricking a deck if they have nothing else to do."))
        result.push(new Quality("Uncouth", 
        "At some point in life, the filter between your thoughts and your mouth disappeared. You consider yourself brutally honest, but others tend to see you as rude and abrasive.", 
        -6, 1, "You cannot spend Edge on any test using Charisma."))
        result.push(new Quality("Uneducated", 
        "Maybe book learning just wasn't your thing, or maybe you were never exposed to vast quantities of information solely for the sake of expanding your knowledge base. Either way, you have a definite lack in your basic education.", 
        -6, 1, "You cannot spend Edge on any test using Logic."))
        result.push(new Quality("Unsteady Hands", 
        "Nervous tics, excessive caffeine intake, or a general clumsiness might be the cause, but the results are all the same: You can't draw a straight line to save your life. You also have a real hard time typing, tying your shoes, and keeping a gunsight on the target.", 
        -4, 1, "You cannot spend Edge on any test using Agility that directly involves your hands (that is, a Stealth test to pull off sleight-of-hand would directly involve the hands, as would an Attack test with any weapon held in the hands, but an Athletics test involving running would not, even though the hands are in motion while running)."))
        result.push(new Quality("Weak Immune System", 
        "Perpetual sniffles are annoying to both you and your team, but a poorly timed sneeze or a sudden need for a bathroom can mean the end of a good run. You're sick almost all the time. It may just be a minor cold, or it could be a nasty case of influenza or worse, but you've never met an infection you didn't want to take home and hang out with for a bit.", 
        -8, 1, "You cannot spend Edge to resist the effects of an infection. The threshold for fighting off any infection you are exposed to is increased by 1. While suffering the ill effects of an illness, you suffer a -1 dice pool modifier to all tests."))
        return result
    }
}

let test = new QualityBucket()
console.log(test.arrayOfQualities[62])