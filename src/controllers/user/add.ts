import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import User from '../../models/User';

const add: RequestHandler = async (req, res) => {
  const response = addUser(req);
  res.send(response);
};

const addUser: any = async (req: any) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });
  await user.save();

  return {
    message: 'Saved',
    user: user.toJSON()
  };
}

export default handleErrorMiddleware(add);
