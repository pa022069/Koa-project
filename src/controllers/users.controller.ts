import { BaseContext } from 'koa';

const UserController = {
  getUsers: async (ctx: BaseContext) => {
    ctx.status = 200;
    ctx.body = [{ id: 1, name: 'hi' }];
  }
};

export default UserController;