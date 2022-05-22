const { faker } = require("@faker-js/faker");
const fs = require('fs')

const poolRawData = {
  caso_0: {
    titulo: faker.random.alphaNumeric(10),
    contenido: faker.random.alphaNumeric(10)
  },
  caso_1: {
    titulo: faker.random.numeric(20, { bannedDigits: [] }),
    contenido: faker.random.numeric(20, { bannedDigits: [] })
  },
  caso_2: {
    titulo: faker.random.words(30),
    contenido: faker.random.words(30)
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
