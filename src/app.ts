import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import * as helmet from 'koa-helmet';
import * as json from 'koa-json';
import * as logger from 'koa-logger';
import { koaSwagger } from 'koa2-swagger-ui';
import 'reflect-metadata';
import router from './server';
import swagger from './swagger';

import * as dotenv from "dotenv";
dotenv.config();

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'development' ? false : true,
}));
app.use(cors());
app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(swagger.routes()).use(swagger.allowedMethods());
app.use(
  koaSwagger({
    routePrefix: '/swagger',
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
);

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`🚀 App listening on the port ${port}`);
});
