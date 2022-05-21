const { faker } = require("@faker-js/faker");
const fs = require('fs')

const poolRawData = {
  caso_0: {
    titulo: faker.random.alpha({ count: 1, bannedChars: [] }),
    contenido: faker.random.alpha({ count: 1, bannedChars: [] })
  },
  caso_1: {
    titulo: faker.random.alpha({ count: 20, bannedChars: [] }),
    contenido: faker.random.alpha({ count: 20, bannedChars: [] })
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

const poolFormatedData = JSON.stringify(poolRawData)

fs.writeFile("cypress/fixtures/pool.json", poolFormatedData, function (err, result) {
  if (err) console.log('error', err);
});
