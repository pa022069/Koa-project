import { BaseContext } from 'koa';

const IndexController = {
  getIndex: async (ctx: BaseContext) => {
    ctx.status = 200;
  }
};

export default IndexController;
