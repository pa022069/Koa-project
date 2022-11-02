import * as Router from 'koa-router';
import swaggerJSDoc from 'swagger-jsdoc';
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
};

const options = {
  swaggerDefinition,
  apis:  ["**/*.{ts,js"],
};
const swaggerSpec = swaggerJSDoc(options);
console.log(swaggerSpec);
router.get('/swagger.json', async ctx => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = swaggerSpec;
});

export default router;