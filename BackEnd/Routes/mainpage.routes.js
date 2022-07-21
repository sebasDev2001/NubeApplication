import { Router } from 'express';
import reactDomServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';

import App from '../../src/App';

const mainPageRouter = Router();

mainPageRouter.get('/', (req, res) => {
    fs.readFile(path.resolve('../../build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error loading main page');
        }
        return res.send(data.replace(
            '<div id="root"></div>', 
            `<div id="root">${reactDomServer.renderToString(<App/>)}</div>`));
    })
})

export default mainPageRouter;