const { Character } = require('../models');

const characterData = [
  {
    user_id: 1,
    name: 'May Maureen McCallister',
    gender: 'female',
    class: 'fighter',
    race: 'dwarf',
    subrace: 'mountain dwarf',
    description: 'bright, caring, impatient, unstable',
    // background: 'May Maureen McCallister is a 35-year-old fighter whose life is dominated by solving the murder of her friend, Pierce Butler.',
    // look: 'Physically, May is not in great shape. She needs to lose quite a lot of weight. She is very short with brown skin, black hair and brown eyes. She has an unusually long nose.',
    // personality: 'bright, caring, impatient, unstable',
    strength: 15,
    dexterity: 6,
    constitution: 14,
    intelligence: 9,
    wisdom: 10,
    charisma: 11,
    portrait_url: null,
},
  {
    user_id: 2,
    name: 'Humphrey Roth',
    gender: 'female',
    class: 'cleric',
    race: 'elf',
    subrace: 'high elf',
    description: 'Callous, group-dependent, clever, non-rebellious and honourable',
    // background: 'She grew up in a middle class neighbourhood. After her father died when she was young, she was raised by her mother. Her best friend is a personal trainer called Henley Green. They are inseparable. They enjoy extreme ironing together.',
    // look: 'Tall and wide with honey skin, she has charming feel about her. She has large, grey eyes, large lips and a square jaw. She has medium-long, straight, black hair. She has spindly legs, and narrow feet.',
    // personality: 'Callous, group-dependent, clever, non-rebellious and honourable',
    strength: 4,
    dexterity: 13,
    constitution: 11,
    intelligence: 18,
    wisdom: 12,
    charisma: 8,
    portrait_url: null,
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;