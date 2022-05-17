const { faker } = require("@faker-js/faker");

export default function generatePool() {
  const pool = {
    caso_0: {
      titulo: '',
      contenido: ''
    },
    caso_1: {
      titulo: faker.random.alpha({ count: 1, bannedChars: [] }),
      contenido: faker.random.alpha({ count: 1, bannedChars: [] })
    },
    caso_2: {
      titulo: faker.random.alpha({ count: 50, bannedChars: [] }),
      contenido: faker.random.alpha({ count: 50, bannedChars: [] })
    },
    caso_3: {
      titulo: faker.random.alpha({ count: 100, bannedChars: [] }),
      contenido: faker.random.alpha({ count: 100, bannedChars: [] })
    },
  }

  return pool;
}