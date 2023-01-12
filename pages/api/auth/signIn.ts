import { authService } from '@lib/api/instance';
import { NextApiHandler } from 'next';
import { User } from 'types/user';
const handleSignIn: NextApiHandler<User> = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;
  try {
    const { token, user } = await authService.singin(email, password);
  } catch {}
};
