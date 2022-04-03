import express, {Request, Response} from 'express';
import path from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {studentRoutes} from './controllers/students-handler.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
// -----------------------------------------------------------------------------

const app = express();

app.use(methodOverride('_method'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs') as unknown;

// students routes
studentRoutes(app);

const port = process.env.PORT || 8624;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/', (_req: Request, res: Response): void => {
  res.render('home');
});

export default app;
