import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import uploadConfig from '@config/upload';
import { errors } from 'celebrate';
import routes from '@shared/http/routes';
import errorHandler from '@shared/errors/errorHandler';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(errors());

app.use(errorHandler);

app.listen(3333, () => {
    console.log('Server is running on port 3333! :)');
});
