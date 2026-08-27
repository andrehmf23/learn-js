import fs from 'fs';

const i = 1; // Posição do arquivo
const PATH = './challenges/';

const files = fs.readdirSync(PATH);

try {
    const module = await import(`./challenges/${files[i-1]}`);
    await module.run();
} catch (error) {
    console.error(error);
}