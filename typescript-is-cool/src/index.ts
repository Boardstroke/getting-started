import express from 'express';
import path from 'path'
import routes from './routes';

const app = express();
app.use(express.static(path.join(__dirname, '../public')))
routes(app);


app.listen(8081, () => {
  console.log(`Porta ${8081}`)
})