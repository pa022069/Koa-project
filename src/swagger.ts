import * as Router from 'koa-router';
import * as swaggerJSDoc from 'swagger-jsdoc';
import * as dotenv from "dotenv";
dotenv.config();

const router = new Router();

const swaggerDefinition = {
  info: {
    description:
      'This is a sample server Koa2 server.',
    version: '1.0.0',
    title: 'Koa2_server Swagger',
    contact: {
      name: 'Jeffrey Wu',
      email: 'pa022069@gmail.com'
    },
  },
  host: 'localhost:3000',
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: ['./src/*.ts'],
};
const swaggerSpec = swaggerJSDoc(options);
console.log(swaggerSpec);
router.get('/swagger.json', async ctx => {
  ctx.set('Content-Type', 'application/json'); // , application/x-www-form-urlencoded
  ctx.body = swaggerSpec;
});

export default router;