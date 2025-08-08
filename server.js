//npm i express
//npm i nodemon
//npm run dev
//npm i typescript @types/node @types/express --save-dev - установить тайпскрипт
//npx tsc --init - ts.config.json
//npx tsc --noEmit
import express from 'express';

const app = express();

async function main() {
    app.use(express.json());
    app.use('/api/twit', (reqest, response) => {
        response.json({ message: 'success' }).status(200);
    })
    app.listen(4200, () => {
        console.log('Сервер запущен на порту 4200.');
    })
}

main();