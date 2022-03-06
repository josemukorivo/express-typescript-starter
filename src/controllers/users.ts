import { Response, Request } from 'express';

export const getUsers = async (req: Request, res: Response) => {
  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'jdoe@gmail.com',
      age: 32,
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
      age: 30,
    },
  ];

  return res.status(200).json(users);
};
